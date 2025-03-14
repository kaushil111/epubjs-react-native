import * as React from 'react';
import { SafeAreaView, useWindowDimensions } from 'react-native';
import { Reader, ReaderProvider } from '@epubjs-react-native/core';
import { useFileSystem } from '@epubjs-react-native/file-system';
import { Header } from './Header';

export function JavascriptInjection() {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView>
      <ReaderProvider>
        <Header />

        <Reader
          src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
          width={width}
          height={height * 0.85}
          fileSystem={useFileSystem}
          initialLocation="epubcfi(/6/14!/4/2/12/2[c001p0005]/1:160)"
          injectedJavascript={`
            function highlightTextByTagId(tagId) {
              return Promise.all(book.spine.spineItems.map((item) => {
                return item.load(book.load.bind(book)).then(() => {
                  const element = item.document.getElementById(tagId);

                  if (!element) return null;

                  const range = item.document.createRange();
                  range.selectNodeContents(element);

                  let textOffset = element.textContent.length;
                  if (element.childNodes.length > 1) {
                    const lastChildNode = element.childNodes[element.childNodes.length - 1];
                    textOffset = lastChildNode.textContent.length;
                  }

                  const cfi = item.cfiFromElement(element).split(')')[0].concat(',/1:0,/').concat(range.endOffset).concat(':').concat(textOffset).concat(')');
                  rendition.annotations.add('highlight', cfi);

                  item.unload();
                  return Promise.resolve();
                });
              }));
            }

            highlightTextByTagId('c001p0005');
          `}
          onWebViewMessage={(message) => console.log(message)}
        />
      </ReaderProvider>
    </SafeAreaView>
  );
}

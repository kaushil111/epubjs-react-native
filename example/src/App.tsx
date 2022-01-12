import * as React from 'react';

import { SafeAreaView, useWindowDimensions } from 'react-native';
import { Reader, BookProvider } from 'epubjs-react-native';

export default function App() {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView>
      <BookProvider>
        <Reader
          src={{ uri: 'https://s3.amazonaws.com/moby-dick/OPS/package.opf' }}
          width={width}
          height={height}
        />
      </BookProvider>
    </SafeAreaView>
  );
}

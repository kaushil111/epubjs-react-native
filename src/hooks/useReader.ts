import { useContext } from 'react';
import { ReaderContext, ReaderContextProps } from '../context';

export function useReader() {
  const {
    changeFontSize,
    changeFontFamily,
    changeTheme,
    goToLocation,
    goPrevious,
    goNext,
    getLocations,
    getCurrentLocation,
    getMeta,
    search,
    clearSearchResults,
    isSearching,
    theme,
    atStart,
    atEnd,
    totalLocations,
    currentLocation,
    progress,
    locations,
    isLoading,
    key,
    searchResults,
    addAnnotation,
    updateAnnotation,
    removeAnnotation,
    removeAnnotationByCfi,
    removeSelection,
    annotations,
    section,
    toc,
    landmarks,
    addBookmark,
    removeBookmark,
    removeBookmarks,
    updateBookmark,
    bookmarks,
    isBookmarked,
    injectJavascript,
    changeFlow,
    isRendering,
  } = useContext(ReaderContext);

  return {
    changeFontSize,
    changeFontFamily,
    changeTheme,
    goToLocation,
    goPrevious,
    goNext,
    getLocations,
    getCurrentLocation,
    getMeta,
    search,
    clearSearchResults,
    addAnnotation,
    updateAnnotation,
    removeAnnotation,
    removeAnnotationByCfi,
    removeSelection,
    theme,
    atStart,
    atEnd,
    totalLocations,
    currentLocation,
    progress,
    locations,
    isLoading,
    key,
    isSearching,
    searchResults,
    annotations,
    section,
    toc,
    landmarks,
    addBookmark,
    removeBookmark,
    removeBookmarks,
    updateBookmark,
    bookmarks,
    isBookmarked,
    injectJavascript,
    changeFlow,
    isRendering,
  } as Pick<
    ReaderContextProps,
    | 'changeFontSize'
    | 'changeFontFamily'
    | 'changeTheme'
    | 'goToLocation'
    | 'goPrevious'
    | 'goNext'
    | 'getLocations'
    | 'getCurrentLocation'
    | 'getMeta'
    | 'search'
    | 'theme'
    | 'atStart'
    | 'atEnd'
    | 'totalLocations'
    | 'currentLocation'
    | 'progress'
    | 'locations'
    | 'isLoading'
    | 'key'
    | 'searchResults'
    | 'addAnnotation'
    | 'updateAnnotation'
    | 'removeAnnotation'
    | 'removeAnnotationByCfi'
    | 'removeSelection'
    | 'annotations'
    | 'section'
    | 'toc'
    | 'landmarks'
    | 'addBookmark'
    | 'removeBookmark'
    | 'removeBookmarks'
    | 'updateBookmark'
    | 'bookmarks'
    | 'isBookmarked'
    | 'injectJavascript'
    | 'clearSearchResults'
    | 'isSearching'
    | 'changeFlow'
    | 'isRendering'
  >;
}

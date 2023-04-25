export const SOURCES: string[];
export namespace MEDIA_SOURCE_DEFAULT_FILTERS {
    const gifs: string;
    const sketchfab: string;
    const scenes: string;
    const favorites: string;
    const objects: string;
    const videos2d: string;
    const videos360: string;
}
export default class MediaSearchStore {
    requestIndex: number;
    setHistory(history: any): void;
    history: any;
    _update: (location: any) => Promise<void>;
    result: any;
    previousSource: string;
    isFetching: boolean;
    nextCursor: any;
    lastFetchedUrl: any;
    pageNavigate: (delta: any) => void;
    filterQueryNavigate: (filter: any, query: any) => void;
    getSearchClearedSearchParams: (location: any, keepSource: any, keepNav: any, keepSelectAction: any) => URLSearchParams;
    _stashLastSearchParams: (location: any) => void;
    _stashedParams: {};
    _stashedSource: string;
    clearStashedQuery: () => void;
    sourceNavigate: (source: any) => void;
    sourceNavigateToDefaultSource: () => void;
    sourceNavigateWithNoNav: (source: any, selectAction: any) => void;
    _sourceNavigate: (source: any, hideNav: any, useLastStashedParams: any, selectAction: any) => Promise<void>;
    _hasAccountWithAvatars: () => Promise<boolean>;
    getUrlMediaSource: (location: any) => string;
    pushExitMediaBrowserHistory: (history: any, stashLastSearchParams?: boolean) => void;
}

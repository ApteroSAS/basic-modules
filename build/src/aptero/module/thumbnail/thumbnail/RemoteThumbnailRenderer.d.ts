export default class RemoteThumbnailRenderer {
    cache: {};
    getLocalCacheFor: (glbFileUrl: any) => any;
    generateThumbnailFromUrlRemote: (glbFileUrl: any) => Promise<any>;
}

export function mediaTypeName(type: any): string;
export function coerceToUrl(urlOrText: any): any;
export function injectCustomShaderChunks(obj: any): any[];
export function getPromotionTokenForFile(fileId: any): any;
export function addAndArrangeMedia(el: any, media: any, contentSubtype: any, snapCount: any, mirrorOrientation?: boolean, distance?: number): {
    entity: HTMLElement;
    orientation: Promise<any>;
};
export function createImageTexture(url: any, filter: any): Promise<any>;
/**
 * Create video element to be used as a texture.
 *
 * @param {string} src - Url to a video file.
 * @returns {Element} Video element.
 */
export function createVideoOrAudioEl(type: any): Element;
export function addMeshScaleAnimation(mesh: any, initialScale: any, onComplete: any): any;
export function closeExistingMediaMirror(): Promise<any>;
export function hasAudioTracks(el: any): any;
export function fetchContentType(url: any): Promise<string>;
export function parseURL(text: any): URL;
export function resolveMediaInfo(urlString: any): Promise<{
    accessibleUrl: any;
    canonicalUrl: string;
    canonicalAudioUrl: any;
    contentType: any;
    mediaType: number;
    thumbnail: any;
}>;
export namespace MediaType {
    const ALL: number;
    const ALL_2D: number;
}
export function getDefaultResolveQuality(is360?: boolean): "high" | "low" | "low_360" | "high_360";
export function resolveUrl(url: any, quality: any, version: number, bustCache: any): Promise<any>;
export function upload(file: any, desiredContentType: any): Promise<any>;
export function addMedia(src: any, template: any, contentOrigin: any, contentSubtype?: any, resolve?: boolean, fitToBox?: boolean, animate?: boolean, mediaOptions?: {}, networked?: boolean, parentEl?: any, linkedEl?: any): {
    entity: HTMLElement;
    orientation: Promise<any>;
};
export function cloneMedia(sourceEl: any, template: any, src?: any, networked?: boolean, link?: boolean, parentEl?: any): {
    entity: HTMLElement;
    orientation: Promise<any>;
};
export const textureLoader: HubsTextureLoader;
import HubsTextureLoader from "../loaders/HubsTextureLoader";

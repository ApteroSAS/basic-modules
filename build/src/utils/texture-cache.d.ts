export class TextureCache {
    static key(src: any, version: any): string;
    cache: Map<any, any>;
    set(src: any, version: any, texture: any): any;
    has(src: any, version: any): boolean;
    get(src: any, version: any): any;
    retain(src: any, version: any): any;
    release(src: any, version: any): void;
    releaseByKey(cacheKey: any): void;
}

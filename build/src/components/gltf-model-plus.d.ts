export function loadGLTF(src: any, contentType: any, onProgress: any, jsonPreprocessor: any): Promise<any>;
export function cloneModelFromCache(src: any): {
    animations: any;
    scene: any;
};
/**
 * @param {string} src
 * @param {string|null} [contentType]
 * @param {boolean} [useCache]
 * @param {null|(json:any)=>any} [jsonPreprocessor]
 */
export function loadModel(src: string, contentType?: string | null, useCache?: boolean, jsonPreprocessor?: (json: any) => any): Promise<any>;
export const gltfCache: GLTFCache;
declare class GLTFCache {
    cache: Map<any, any>;
    set(src: any, gltf: any): any;
    has(src: any): boolean;
    get(src: any): any;
    retain(src: any): any;
    release(src: any): void;
}
export {};

export const TEXTURES_FLIP_Y: boolean;
declare const HubsTextureLoader_base: typeof import("three").TextureLoader;
export default class HubsTextureLoader extends HubsTextureLoader_base {
    constructor(manager: any);
    load(url: any, onLoad: any, onProgress: any, onError: any): import("three").Texture;
    loadAsync(url: any, onProgress: any): Promise<any>;
    _loadImageBitmapTexture(url: any, onLoad: any, onProgress: any, onError: any): import("three").Texture;
}
export {};

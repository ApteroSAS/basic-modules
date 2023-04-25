export function getAvatarType(avatarId: any): string;
export function fetchAvatar(avatarId: any): Promise<any>;
export function fetchAvatarGltfUrl(avatarId: any): Promise<any>;
export function getAvatarSrc(avatarId: any): any;
export function getAvatarThumbnailUrl(avatarId: any): Promise<any>;
export function ensureAvatarMaterial(gltf: any): any;
export function remixAvatar(parentId: any, name: any): Promise<any>;
export namespace AVATAR_TYPES {
    const SKINNABLE: string;
    const URL: string;
}
export const MAT_NAME: "Bot_PBS";

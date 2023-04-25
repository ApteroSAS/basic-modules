export function create360ImageMesh(texture: any): import("three").Mesh<import("three").SphereGeometry, import("three").MeshBasicMaterial>;
export function createImageMesh(texture: any, ratio: any, alphaMode?: "opaque", alphaCutoff?: number): import("three").Mesh<import("three").PlaneGeometry, import("three").MeshBasicMaterial>;
export const AlphaMode: Readonly<{
    Blend: "blend";
    Mask: "mask";
    Opaque: "opaque";
}>;

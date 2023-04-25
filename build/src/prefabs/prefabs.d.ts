import { MediaLoaderParams } from "../inflators/media-loader";
import { EntityDef } from "../utils/jsx-entity";
type CameraPrefabT = () => EntityDef;
type CubeMediaPrefabT = () => EntityDef;
type MediaPrefabT = (params: MediaLoaderParams) => EntityDef;
export type PrefabDefinition = {
    permission?: "spawn_camera";
    template: CameraPrefabT | CubeMediaPrefabT | MediaPrefabT;
};
export type PrefabName = "camera" | "cube" | "media";
export declare const prefabs: Map<PrefabName, PrefabDefinition>;
export {};

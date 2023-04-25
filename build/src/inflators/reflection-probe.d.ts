import { Texture } from "three";
import { HubsWorld } from "../app";
export interface ReflectionProbeParams {
    size: number;
    envMapTexture?: Texture;
}
export declare function inflateReflectionProbe(world: HubsWorld, eid: number, componentProps: ReflectionProbeParams): void;

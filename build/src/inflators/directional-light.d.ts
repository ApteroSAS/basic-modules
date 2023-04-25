import { HubsWorld } from "../app";
export type DirectionalLightParams = {
    color: string;
    intensity: number;
    castShadow: boolean;
    shadowMapResolution: [number, number];
    shadowBias: number;
    shadowRadius: number;
};
export declare function inflateDirectionalLight(world: HubsWorld, eid: number, params: DirectionalLightParams): number;

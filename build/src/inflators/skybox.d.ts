import { HubsWorld } from "../app";
export interface SkyboxParams {
    turbidity: number;
    rayleigh: number;
    luminance: number;
    mieCoefficient: number;
    mieDirectionalG: number;
    inclination: number;
    azimuth: number;
    distance: number;
}
/**
 * @deprecated use `inflateEnvironmentSettings` with an `envMapTexture` and `backgroundTexture` instead
 */
export declare function inflateSkybox(world: HubsWorld, eid: number, props: SkyboxParams): void;

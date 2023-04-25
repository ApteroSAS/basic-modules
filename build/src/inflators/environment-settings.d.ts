import { Color, Texture } from "three";
import { HubsWorld } from "../app";
import Sky from "../components/skybox";
export interface EnvironmentSettingsParams {
    toneMapping?: string;
    outputEncoding?: string;
    toneMappingExposure?: number;
    physicallyCorrectLights?: boolean;
    envMapTexture?: Texture;
    skybox?: Sky;
    backgroundTexture?: Texture;
    backgroundColor?: Color;
    fogType?: "linear" | "exponential";
    fogColor?: Color;
    fogDensity?: number;
    fogFar?: number;
    fogNear?: number;
    enableHDRPipeline?: boolean;
    enableBloom?: boolean;
    bloom?: {
        threshold?: number;
        intensity?: number;
        radius?: number;
        smoothing?: number;
    };
}
export declare function inflateEnvironmentSettings(world: HubsWorld, eid: number, props: EnvironmentSettingsParams): void;
export interface FogParams {
    type?: "linear" | "exponential";
    color?: string;
    near?: number;
    far?: number;
    density?: number;
}
/**
 * @deprecated use inflateEnvironmentSettings instead
 */
export declare function inflateFog(world: HubsWorld, eid: number, props: FogParams): void;
export interface BackgroundParams {
    backgroundColor: string;
}
/**
 * @deprecated use inflateEnvironmentSettings instead
 */
export declare function inflateBackground(world: HubsWorld, eid: number, props: BackgroundParams): void;

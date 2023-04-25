import { HubsWorld } from "../app";
import { ProjectionMode } from "../utils/projection-mode";
export interface VideoLoaderParams {
    src: string;
    projection: ProjectionMode;
    autoPlay: boolean;
    controls: boolean;
    loop: boolean;
}
export declare function inflateVideoLoader(world: HubsWorld, eid: number, params: VideoLoaderParams): void;

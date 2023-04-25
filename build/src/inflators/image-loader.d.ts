import { HubsWorld } from "../app";
import { ProjectionMode } from "../utils/projection-mode";
export interface ImageLoaderParams {
    src: string;
    projection: ProjectionMode;
}
export declare function inflateImageLoader(world: HubsWorld, eid: number, params: ImageLoaderParams): void;

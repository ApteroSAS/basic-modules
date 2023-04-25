import { HubsWorld } from "../app";
export interface SpawnerParams {
    src: string;
    mediaOptions?: {
        applyGravity?: boolean;
    };
}
export declare function inflateSpawner(world: HubsWorld, eid: number, props: SpawnerParams): void;

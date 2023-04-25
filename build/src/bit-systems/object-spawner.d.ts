import { HubsWorld } from "../app";
export declare enum OBJECT_SPAWNER_FLAGS {
    /** Apply gravity to spawned objects */
    APPLY_GRAVITY = 1
}
export declare function objectSpawnerSystem(world: HubsWorld): void;

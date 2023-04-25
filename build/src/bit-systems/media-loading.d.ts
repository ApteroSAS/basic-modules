import { HubsWorld } from "../app";
import { EntityID } from "../utils/networking-types";
export declare const MEDIA_LOADER_FLAGS: {
    RECENTER: number;
    RESIZE: number;
    ANIMATE_LOAD: number;
    IS_OBJECT_MENU_TARGET: number;
};
export declare function animateScale(world: HubsWorld, media: EntityID): Generator<any, void, unknown>;
export declare function add(world: HubsWorld, child: EntityID, parent: EntityID): void;
export declare function mediaLoadingSystem(world: HubsWorld): void;

import { HubsWorld } from "../app";
import HubChannel from "./hub-channel";
import type { EntityID, Message } from "./networking-types";
export interface StorableMessage extends Message {
    version: 1;
}
export declare function tryPin(world: HubsWorld, eid: EntityID, hubChannel: HubChannel): Promise<void>;
export declare function tryUnpin(world: HubsWorld, eid: EntityID, hubChannel: HubChannel): Promise<void>;

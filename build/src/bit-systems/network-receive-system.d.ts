import { HubsWorld } from "../app";
import type { UpdateMessage } from "../utils/networking-types";
export declare const storedUpdates: Map<number, UpdateMessage[]>;
export declare function networkReceiveSystem(world: HubsWorld): void;

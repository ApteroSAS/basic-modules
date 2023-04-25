import { HubsWorld } from "../app";
import type { EntityID, Message, NetworkID } from "./networking-types";
import { StorableMessage } from "./store-networked-state";
export declare function messageFor(world: HubsWorld, created: EntityID[], updated: EntityID[], needsFullSyncUpdate: EntityID[], deleted: EntityID[], isBroadcast: boolean): Message;
export declare function messageForStorage(world: HubsWorld, created: EntityID[], updated: EntityID[], deleted: EntityID[]): StorableMessage;
export interface LegacyRoomObject {
    extensions: {
        HUBS_components: {
            media: {
                version: number;
                src: string;
                id: NetworkID;
                contentSubtype?: string;
            };
            pinnable: {
                pinned: boolean;
            };
        };
    };
    name: NetworkID;
    rotation: [number, number, number, number];
    translation: [number, number, number];
    scale: [number, number, number];
}
export declare function messageForLegacyRoomObjects(objects: LegacyRoomObject[]): Message;

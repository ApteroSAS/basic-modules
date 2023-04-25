/// <reference types="bitecs" />
import type { ClientID, CreateMessageData, EntityID, Message, StringID } from "../utils/networking-types";
export declare let localClientID: ClientID | null;
export declare function setLocalClientID(clientID: ClientID): void;
export declare const createMessageDatas: Map<EntityID, CreateMessageData>;
export declare const networkedQuery: import("bitecs").Query<import("bitecs").IWorld>;
export declare const pendingMessages: Message[];
export declare const pendingJoins: StringID[];
export declare const pendingParts: StringID[];
export declare const softRemovedEntities: Set<number>;
export declare function isNetworkInstantiated(eid: EntityID): boolean;
export declare function isPinned(eid: EntityID): boolean;
export declare function isCreatedByMe(eid: EntityID): boolean;

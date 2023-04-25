import { HubsWorld } from "../app";
import { ClientID, EntityID, NetworkID } from "./networking-types";
export declare function setNetworkedDataWithRoot(world: HubsWorld, rootNid: NetworkID, eid: EntityID, creator: ClientID): void;
export declare function setNetworkedDataWithoutRoot(world: HubsWorld, rootNid: NetworkID, childEid: EntityID): void;
type CreatorID = NetworkID | ClientID;
export declare function setInitialNetworkedData(world: HubsWorld, eid: EntityID, nid: NetworkID, creator: CreatorID): void;
export {};

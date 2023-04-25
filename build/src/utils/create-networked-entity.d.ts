import { HubsWorld } from "../app";
import { PrefabName } from "../prefabs/prefabs";
import type { ClientID, InitialData, NetworkID } from "./networking-types";
export declare function createNetworkedEntity(world: HubsWorld, prefabName: PrefabName, initialData: InitialData): number;
export declare function renderAsNetworkedEntity(world: HubsWorld, prefabName: PrefabName, initialData: InitialData, nid: NetworkID, creator: ClientID): number;

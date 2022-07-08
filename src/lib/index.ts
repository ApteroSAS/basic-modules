import { getGlobalStorageValue, GLOBAL_WORLDS_ENTITY, registerItem, WorldEntity } from "@aptero/axolotis-player";
import { AxItem } from "./AxItem";

import type PropertiesDefault from "./modules/properties/Properties";
export type Properties = PropertiesDefault;
import type NameGenerationServiceDefault from "./modules/nameGeneration/NameGenerationService";
export type NameGenerationService = NameGenerationServiceDefault;
import type RoomServiceDefault from "./modules/roomAPI/RoomService";
export type RoomService = RoomServiceDefault;
import type PhoenixAuthServiceDefault from "./modules/phoenixAuth/PhoenixAuthService";
export type PhoenixAuthService = PhoenixAuthServiceDefault;

export type { MsToNativeLoginBridge } from "./modules/phoenixAuth/MsToNativeLoginBridge";

export * from "./modules/properties/Properties";
export * from "./ImportHelper";
export * from "./common/AuthInterface";

export const register = () => {
  const worlds = getGlobalStorageValue<WorldEntity[]>(GLOBAL_WORLDS_ENTITY, false);
  if (!(worlds && worlds.length > 0)) {
    throw new Error("Axolotis World Needs to be initialized");
  }
  registerItem(new AxItem()); //auto registration of service
};

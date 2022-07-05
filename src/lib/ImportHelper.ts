import { getServiceSync } from "@aptero/axolotis-player";
/**
 * Should only import type to stay lightweight
 */
import type Properties from "@root/modules/properties/Properties";
import type RoomService from "@root/modules/roomAPI/RoomService";
import type PhoenixAuthService from "@root/modules/phoenixAuth/PhoenixAuthService";
import type NameGenerationService from "@root/modules/nameGeneration/NameGenerationService";
import type CookieStore from "@root/modules/store/CookieStore";
import type Store from "@root/modules/store/Store";

export const PROPERTIES_SERVICE = "@aptero/axolotis-module-properties/Properties";
export const STORE_SERVICE = "@aptero/axolotis-module-storage/Store";
export const COOKIE_STORE_SERVICE = "@aptero/axolotis-module-storage/CookieStore";
export const PHX_AUTH_SERVICE = "@aptero/axolotis-module-phx-auth/PhoenixAuthService";
export const NAME_SERVICE = "@aptero/axolotis-module-name/PhoenixAuthService";
export const ROOM_SERVICE = "@aptero/axolotis-module-room/RoomService";

export function propertyService(): Properties {
  return getServiceSync<Properties>(PROPERTIES_SERVICE);
}

export function roomService(): RoomService {
  return getServiceSync<RoomService>(ROOM_SERVICE);
}

export function nameGenerationService(): NameGenerationService {
  return getServiceSync<NameGenerationService>(NAME_SERVICE);
}

export function phoenixAuth(): PhoenixAuthService {
  return getServiceSync<PhoenixAuthService>(PHX_AUTH_SERVICE);
}

export function cookiesStore(): CookieStore {
  return getServiceSync<CookieStore>(COOKIE_STORE_SERVICE);
}

export function store(): Store {
  return getServiceSync<Store>(STORE_SERVICE);
}

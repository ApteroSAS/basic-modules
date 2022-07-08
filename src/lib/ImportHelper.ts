import { getService, getServiceSync } from "@aptero/axolotis-player";
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

export async function propertyService(): Promise<Properties> {
  return getService<Properties>(PROPERTIES_SERVICE);
}

export async function roomService(): Promise<RoomService> {
  return getService<RoomService>(ROOM_SERVICE);
}

/* needs preload before usage */
export function roomServiceSync(): RoomService {
  return getServiceSync<RoomService>(ROOM_SERVICE);
}

export async function nameGenerationService(): Promise<NameGenerationService> {
  return getService<NameGenerationService>(NAME_SERVICE);
}

export async function phoenixAuth(): Promise<PhoenixAuthService> {
  return getService<PhoenixAuthService>(PHX_AUTH_SERVICE);
}

export async function cookiesStore(): Promise<CookieStore> {
  return getService<CookieStore>(COOKIE_STORE_SERVICE);
}

export async function store(): Promise<Store> {
  return getService<Store>(STORE_SERVICE);
}

/**
 * Should only import type to stay lightweight
 */
import type Properties from "./modules/properties/Properties";
import type RoomService from "./modules/roomAPI/RoomService";
import type PhoenixAuthService from "./modules/phoenixAuth/PhoenixAuthService";
import type NameGenerationService from "./modules/nameGeneration/NameGenerationService";
import type CookieStore from "./modules/store/CookieStore";
import type Store from "./modules/store/Store";
export declare const PROPERTIES_SERVICE = "@aptero/axolotis-module-properties/Properties";
export declare const STORE_SERVICE = "@aptero/axolotis-module-storage/Store";
export declare const COOKIE_STORE_SERVICE = "@aptero/axolotis-module-storage/CookieStore";
export declare const PHX_AUTH_SERVICE = "@aptero/axolotis-module-phx-auth/PhoenixAuthService";
export declare const NAME_SERVICE = "@aptero/axolotis-module-name/PhoenixAuthService";
export declare const ROOM_SERVICE = "@aptero/axolotis-module-room/RoomService";
export declare function propertyService(): Promise<Properties>;
export declare function roomService(): Promise<RoomService>;
export declare function roomServiceSync(): RoomService;
export declare function nameGenerationService(): Promise<NameGenerationService>;
export declare function phoenixAuth(): Promise<PhoenixAuthService>;
export declare function cookiesStore(): Promise<CookieStore>;
export declare function store(): Promise<Store>;

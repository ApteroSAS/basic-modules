/**
 * Should only import type to stay lightweight
 */
import type { Properties } from "@aptero/axolotis-module-basic-async";
import type { RoomService } from "@aptero/axolotis-module-basic-async";
import type { PhoenixAuthService } from "@aptero/axolotis-module-basic-async";
import type { NameGenerationService } from "@aptero/axolotis-module-basic-async";
import type { CookieStore } from "@aptero/axolotis-module-basic-async";
import type { Store } from "@aptero/axolotis-module-basic-async";
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

import {ContainerModule, interfaces} from "inversify";
import {
    COOKIE_STORE_SERVICE,
    NAME_SERVICE,
    PHX_AUTH_SERVICE,
    PROPERTIES_SERVICE,
    ROOM_SERVICE,
    STORE_SERVICE
} from "@root/Identifier";
import {Properties} from "@root/properties/Properties";
import {NameGenerationService} from "@root/nameGeneration/NameGenerationService";
import {CookieStore} from "@root/store/CookieStore";
import {Store} from "@root/store/Store";
import {PhoenixAuthService} from "@root/phoenixAuth/PhoenixAuthService";
import {RoomService} from "@root/roomAPI/RoomService";

export * from "./properties/Properties";
export * from "./nameGeneration/NameGenerationService";
export * from "./phoenixAuth/PhoenixAuthService";
export * from "./phoenixAuth/MsToNativeLoginBridge";
export * from "./common/AuthInterface";
export * from "./roomAPI/RoomService";
export * from "./store/CookieStore";
export * from "./store/Store";
export * from "./Identifier";
export const BasicModule = () => {
    return new ContainerModule((bind: interfaces.Bind) => {
        bind(PROPERTIES_SERVICE).toDynamicValue(() => {
            return new Properties();
        }).inSingletonScope();
        bind(NAME_SERVICE).toDynamicValue(() => {
            return new NameGenerationService();
        }).inSingletonScope();
        bind(COOKIE_STORE_SERVICE).toDynamicValue(() => {
            return new CookieStore();
        }).inSingletonScope();
        bind(STORE_SERVICE).toDynamicValue(() => {
            return new Store();
        }).inSingletonScope();
        bind(PHX_AUTH_SERVICE).toDynamicValue((context) => {
            return new PhoenixAuthService(context.container.get(PROPERTIES_SERVICE),context.container.get(STORE_SERVICE));
        }).inSingletonScope();
        bind(ROOM_SERVICE).to(RoomService).inSingletonScope();
    });
}

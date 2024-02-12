import "reflect-metadata";
import {ContainerModule, interfaces} from "inversify";
import {
    COOKIE_STORE_SERVICE, HttpEventServiceName,
    NAME_SERVICE, NATIVE_LOGIN_BRIDGE_SERVICE,
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
import {NativeLoginBridge} from "@root/phoenixAuth/NativeLoginBridge";
import {HttpEventService} from "@root/telemetry/HttpEventService";

export * from "./properties/Properties";
export * from "./nameGeneration/NameGenerationService";
export * from "./phoenixAuth/PhoenixAuthService";
export * from "./phoenixAuth/NativeLoginBridge";
export * from "./common/AuthInterface";
export * from "./roomAPI/RoomService";
export * from "./store/CookieStore";
export * from "./store/Store";
export * from "./telemetry/HttpEventService";
export * from "./Identifier";
export const BasicModule = () => {
    return new ContainerModule((bind: interfaces.Bind) => {
        bind(HttpEventServiceName).to(HttpEventService).inSingletonScope();

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
        bind(NATIVE_LOGIN_BRIDGE_SERVICE).toDynamicValue(() => {
            return new NativeLoginBridge();
        }).inSingletonScope();
        bind(PHX_AUTH_SERVICE).toDynamicValue((context) => {
            return new PhoenixAuthService(
                context.container.get(PROPERTIES_SERVICE),
                context.container.get(NATIVE_LOGIN_BRIDGE_SERVICE),
                context.container.get(STORE_SERVICE));
        }).inSingletonScope();
        bind(ROOM_SERVICE).toDynamicValue((context) => {
            return new RoomService(
                context.container.get(PHX_AUTH_SERVICE),
                context.container.get(STORE_SERVICE),
                context.container.get(PROPERTIES_SERVICE),
                context.container.get(NAME_SERVICE),
                context.container.get(COOKIE_STORE_SERVICE)
            );
        }).inSingletonScope();
    });
}

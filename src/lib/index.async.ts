import {ContainerModule, interfaces} from "inversify";
import {
    COOKIE_STORE_SERVICE,
    NAME_SERVICE,
    PHX_AUTH_SERVICE,
    PROPERTIES_SERVICE,
    ROOM_SERVICE,
    STORE_SERVICE
} from "@root/Identifier";

export * from "./Identifier";

export const BasicModule = () => {
    return new ContainerModule((bind: interfaces.Bind) => {
        bind(PROPERTIES_SERVICE).toDynamicValue(async () => {
            let module = await import("@root/properties/Properties");
            return new module.Properties();
        }).inSingletonScope();
        bind(NAME_SERVICE).toDynamicValue(async () => {
            let module = await import("@root/nameGeneration/NameGenerationService");
            return new module.NameGenerationService();
        }).inSingletonScope();
        bind(COOKIE_STORE_SERVICE).toDynamicValue(async() => {
            let module = await import("@root/store/CookieStore");
            return new module.CookieStore();
        }).inSingletonScope();
        bind(STORE_SERVICE).toDynamicValue(async() => {
            let module = await import("@root/store/Store");
            return new module.Store();
        }).inSingletonScope();
        bind(PHX_AUTH_SERVICE).toDynamicValue(async (context) => {
            let module = await import("@root/phoenixAuth/PhoenixAuthService");
            return new module.PhoenixAuthService(context.container.get(PROPERTIES_SERVICE),context.container.get(STORE_SERVICE));
        }).inSingletonScope();
        bind(ROOM_SERVICE).toDynamicValue(async (context) => {
            let module = await import("@root/roomAPI/RoomService");
            return new module.RoomService(
                context.container.get(PHX_AUTH_SERVICE),
                context.container.get(STORE_SERVICE),
                context.container.get(PROPERTIES_SERVICE),
                context.container.get(NAME_SERVICE),
                context.container.get(COOKIE_STORE_SERVICE)
            );
        }).inSingletonScope();
    });
}

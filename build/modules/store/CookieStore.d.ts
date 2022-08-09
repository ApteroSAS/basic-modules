import { IService } from "@aptero/axolotis-player";
export default class CookieStore implements IService {
    getType(): string;
    get(key: string): string;
    set(key: string, value: any): string;
    remove(key: string): void;
}

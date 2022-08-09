import { IService } from "@aptero/axolotis-player";
import Cookies from "js-cookie";

export default class CookieStore implements IService {
  getType(): string {
    return CookieStore.name;
  }

  get(key: string) {
    return Cookies.get(key);
  }

  set(key: string, value: any) {
    return Cookies.set(key, value);
  }

  remove(key: string) {
    return Cookies.remove(key);
  }
}

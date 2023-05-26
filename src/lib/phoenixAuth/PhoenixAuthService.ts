import {AdminRole} from "./AdminRole";
import {
    connectToReticulum,
    createAndRedirectToNewHub,
    fetchReticulumAuthenticated,
    getReticulumFetchUrl,
    isLocalClient,
    setConfig,
    setStore
} from "./phoenix-utils";
import AuthChannel from "./auth-channel";
import {AuthInterface} from "@root/common/AuthInterface";
import {MsToNativeLoginBridge} from "./MsToNativeLoginBridge";
import {Properties} from "@root/properties/Properties";
import {PropertiesFormat} from "@root/phoenixAuth/PropertiesFormat";
import {Store} from "@root/store/Store";


export class PhoenixAuthService {
  adminRole = new AdminRole();
  nativeBridge = new MsToNativeLoginBridge();
  private ret: any;

  constructor(
      properties: Properties,
      store:Store
  ) {
    setConfig( () => {
      return properties.getGlobalProperties<PropertiesFormat>();
    });
    setStore( () => {
      return store;
    });
  }

  getNativeInterface() {
    return this.nativeBridge;
  }

  setGlobalReticulumChannel(ret) {
    this.ret = ret;
  }

  getGlobalReticulumChannel(ret) {
    return ret;
  }

  registerAuth(auth: AuthInterface) {
    throw new Error();
  }

  getAdmin() {
    return this.adminRole;
  }

  async connectToReticulum(debug = false, params = null, socketClass = null) {
    return connectToReticulum(debug, params, socketClass);
  }

  createAuthChannel(store) {
    return new AuthChannel(store);
  }

  getType(): string {
    return PhoenixAuthService.name;
  }

  async createAndRedirectToNewHub(name, sceneId, replace) {
    return createAndRedirectToNewHub(name, sceneId, replace);
  }

  getReticulumFetchUrl(path, absolute = false, host = null, port = null) {
    return getReticulumFetchUrl(path, absolute, host, port);
  }

  fetchReticulumAuthenticated(url, method = "GET", payload = null) {
    return fetchReticulumAuthenticated(url, method, payload);
  }

  isLocalClient() {
    return isLocalClient();
  }
}

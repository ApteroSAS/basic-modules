import merge from "deepmerge";
import {EventTarget} from "event-target-shim";

const LOCAL_STORE_KEY = "___hubs_store";
const STORE_STATE_CACHE_KEY = Symbol();

export class Store extends EventTarget {
  constructor() {
    super();

    if (typeof localStorage !== "undefined") {
      if (localStorage.getItem(LOCAL_STORE_KEY) === null) {
        localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify({}));
      }
    }

    // When storage is updated in another window
    window.addEventListener("storage", (e) => {
      if (e.key !== LOCAL_STORE_KEY) return;
      delete this[STORE_STATE_CACHE_KEY];
      this.dispatchEvent(new CustomEvent("statechanged") as any);
    });
  }

  getType(): string {
    return Store.name;
  }

  get state() {
    if (!this[STORE_STATE_CACHE_KEY] && typeof localStorage !== "undefined") {
      this[STORE_STATE_CACHE_KEY] = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY));
    }

    return this[STORE_STATE_CACHE_KEY];
  }

  clearStoredArray(key) {
    const overwriteMerge = (destinationArray, sourceArray) => sourceArray;
    const update = {};
    update[key] = [];

    this.update(update, { arrayMerge: overwriteMerge });
  }

  update(newState, mergeOpts = null) {
    const finalState = merge(this.state, newState, mergeOpts);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(finalState));
    }
    delete this[STORE_STATE_CACHE_KEY];

    this.dispatchEvent(new CustomEvent("statechanged") as any);

    return finalState;
  }
}

import {createWorld, getGlobalStorageValue, GLOBAL_WORLDS_ENTITY, WorldEntity} from "@aptero/axolotis-player";
import {cookiesStore, nameGenerationService, phoenixAuth, propertyService, roomService, store} from "../../lib";

export async function initAxolotisPlayer(){
  const worlds = getGlobalStorageValue<WorldEntity[]>(GLOBAL_WORLDS_ENTITY, false);
  if ((worlds && worlds.length > 0)) {
    throw new Error("Axolotis World already initialized");
  }
  await createWorld();
  const {register} = await import("../../lib/index");
  await register();
  console.log("Axolotis player : loaded");
}

(async ()=>{
  await initAxolotisPlayer();
  await store();
  await cookiesStore();
  await phoenixAuth();
  await nameGenerationService();
  await roomService();
  await propertyService();

  document.body.innerText = (await nameGenerationService()).generateHubName();

})()

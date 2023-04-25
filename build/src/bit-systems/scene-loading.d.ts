import { HubsWorld } from "../app";
import { CharacterControllerSystem } from "../systems/character-controller-system";
import { EnvironmentSystem } from "../systems/environment-system";
export declare function swapActiveScene(world: HubsWorld, src: string): void;
export declare function sceneLoadingSystem(world: HubsWorld, environmentSystem: EnvironmentSystem, characterController: CharacterControllerSystem): void;

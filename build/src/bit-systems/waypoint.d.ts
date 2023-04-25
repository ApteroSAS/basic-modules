import { HubsWorld } from "../app";
import { CharacterControllerSystem } from "../systems/character-controller-system";
export declare enum WaypointFlags {
    canBeSpawnPoint = 1,
    canBeOccupied = 2,
    canBeClicked = 4,
    willDisableMotion = 8,
    willDisableTeleporting = 16,
    willMaintainInitialOrientation = 32,
    snapToNavMesh = 64
}
export declare function releaseOccupiedWaypoint(): void;
export declare function moveToSpawnPoint(world: HubsWorld, characterController: CharacterControllerSystem): void;
export declare function waypointSystem(world: HubsWorld, characterController: CharacterControllerSystem, sceneIsFrozen: boolean): void;

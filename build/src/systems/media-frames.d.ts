export class MediaFramesSystem {
    constructor(physicsSystem: any, interactionSystem: any);
    physicsSystem: any;
    interactionSystem: any;
    sceneEntered: boolean;
    tick(): void;
    getCapturableEntityCollidingWithBody(mediaType: any, bodyUUID: any): any;
    isColliding(entityA: any, entityB: any): boolean;
}

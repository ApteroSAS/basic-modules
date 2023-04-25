export class ShadowSystem {
    constructor(sceneEl: any);
    sceneEl: any;
    shadowCameraBoundingBox: import("three").Box3;
    previousShadowsEnabled: any;
    realtimeShadowsEnabled: boolean;
    updatePrefs(): void;
    tick(): void;
}

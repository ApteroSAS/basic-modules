export class NameTagVisibilitySystem {
    constructor(sceneEl: any);
    sceneEl: any;
    store: import("../storage/store").default;
    components: any[];
    lastUpdateTime: number;
    tick: () => void;
    onStateChanged(): void;
    nametagVisibility: any;
    nametagVisibilityDistance: number;
    avatarRig: any;
    register(component: any): void;
    unregister(component: any): void;
}

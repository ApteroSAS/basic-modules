export class SpriteSystem {
    constructor(scene: any);
    raycast(raycaster: any, intersects: any): any;
    sprites: {
        action: any[];
        notice: any[];
    };
    indicesFromSprites: {
        action: WeakMap<object, any>;
        notice: WeakMap<object, any>;
    };
    meshes: {
        action: any;
        notice: any;
    };
    tick(t: any): void;
    updateUVs(sprite: any): void;
    add(sprite: any): 1 | 0 | -1;
    remove(sprite: any): void;
}

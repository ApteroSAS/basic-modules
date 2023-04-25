export class DrawingMenuSystem {
    constructor(sceneEl: any);
    sceneEl: any;
    lastIntersection: import("three").Vector3;
    drawingMenus: any[];
    buttonMap: {};
    cursorControllers: NodeListOf<Element>;
    camera: any;
    tick(): void;
    getMenuScale(distance: any): number;
    scaleMenus: () => void;
    handleButtons: () => void;
    getHovered(): any;
    showMenu: (hovered: any, intersectionPoint: any) => void;
    hideMenus(): void;
    registerDrawingMenu(networkedDrawingEl: any): void;
    unregisterDrawingMenu(networkedDrawingEl: any): void;
}

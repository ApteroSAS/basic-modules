export class MenuAnimationSystem {
    components: any[];
    data: Map<any, any>;
    tick: (t: any) => void;
    viewingCameraEl: HTMLElement;
    register(component: any, menuEl: any, chooseScale: any): void;
    unregister(component: any): void;
}

export class CursorTargettingSystem {
    aframeTargets: any[];
    targets: any[];
    dirty: boolean;
    onMutation(records: any): void;
    onObject3DSet(): void;
    onObject3DRemove(): void;
    observer: MutationObserver;
    rightRemote: HTMLElement;
    leftRemote: HTMLElement;
    tick(t: any): void;
    remove(): void;
}

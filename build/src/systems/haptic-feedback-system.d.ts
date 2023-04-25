export class HapticFeedbackSystem {
    state: {
        rightHand: {
            held: any;
            hovered: any;
            isTeleporting: boolean;
        };
        rightRemote: {
            held: any;
            hovered: any;
            isTeleporting: boolean;
        };
        leftHand: {
            held: any;
            hovered: any;
            isTeleporting: boolean;
        };
        leftRemote: {
            held: any;
            hovered: any;
            isTeleporting: boolean;
        };
    };
    tick(twoPointStretchingSystem: any, interactLeft: any, interactRight: any): void;
    leftTeleporter: any;
    rightTeleporter: any;
}

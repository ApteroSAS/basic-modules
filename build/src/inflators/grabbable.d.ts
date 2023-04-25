import { HubsWorld } from "../app";
export type GrabbableParams = {
    cursor: boolean;
    hand: boolean;
};
export declare function inflateGrabbable(world: HubsWorld, eid: number, props: GrabbableParams): void;

import { HubsWorld } from "../app";
export type MediaLoaderParams = {
    src: string;
    resize: boolean;
    recenter: boolean;
    animateLoad: boolean;
    isObjectMenuTarget: boolean;
};
export declare function inflateMediaLoader(world: HubsWorld, eid: number, { src, recenter, resize, animateLoad, isObjectMenuTarget }: MediaLoaderParams): void;

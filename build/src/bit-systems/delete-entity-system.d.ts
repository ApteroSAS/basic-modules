import { HubsWorld } from "../app";
export type Coroutine = Generator<Promise<void>, void, unknown>;
export declare function deleteEntitySystem(world: HubsWorld, userinput: any): void;

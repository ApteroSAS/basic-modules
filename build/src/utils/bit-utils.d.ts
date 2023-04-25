import { Component } from "bitecs";
import { HubsWorld } from "../app";
export declare function anyEntityWith(world: HubsWorld, component: Component): number;
export declare function hasAnyComponent(world: HubsWorld, components: Component[], eid: number): boolean;
export declare function findAncestorEntity(world: HubsWorld, eid: number, predicate: (eid: number) => boolean): any;
export declare function findAncestorWithComponent(world: HubsWorld, component: Component, eid: number): any;

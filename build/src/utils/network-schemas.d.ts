import { Component } from "bitecs";
import { HubsWorld } from "../app";
import type { CursorBuffer, EntityID } from "./networking-types";
export interface StoredComponent {
    version: number;
    data: any;
}
export interface NetworkSchema {
    componentName: string;
    serialize: (world: HubsWorld, eid: EntityID, data: CursorBuffer, isFullSync: boolean, writeToShadow: boolean) => boolean;
    deserialize: (world: HubsWorld, eid: EntityID, data: CursorBuffer) => void;
    serializeForStorage?: (eid: EntityID) => StoredComponent;
    deserializeFromStorage?: (eid: EntityID, storedComponent: StoredComponent) => void;
}
export declare const schemas: Map<Component, NetworkSchema>;
export declare const networkableComponents: Component[];
export declare function read(prop: any, eid: EntityID): any;
export declare function write(prop: any, eid: EntityID, value: any): void;
export type Migration = (storedComponent: StoredComponent) => StoredComponent;
export type ApplyFn = (eid: EntityID, storedComponent: StoredComponent) => boolean;
export declare function deserializerWithMigrations(migrations: Map<number, Migration>, apply: ApplyFn): (eid: EntityID, original: StoredComponent) => void;

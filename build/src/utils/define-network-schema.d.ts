export function defineNetworkSchemaForProps(componentProps: any): {
    serialize(_world: any, eid: any, data: any, isFullSync: any, writeToShadow: any): boolean;
    deserialize(_world: any, eid: any, data: any): void;
};
export function defineNetworkSchema(Component: any): {
    serialize(_world: any, eid: any, data: any, isFullSync: any, writeToShadow: any): boolean;
    deserialize(_world: any, eid: any, data: any): void;
};

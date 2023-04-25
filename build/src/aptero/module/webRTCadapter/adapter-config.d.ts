import type NafTwilioAdapter from "./naf-twilio-adapter";
export declare function adapterReady(): Promise<any>;
export declare function getAdapterParams(): {
    adapter: string;
    transport: string;
    url?: string;
};
export declare function choseAdapter(adapter: any): Promise<any>;
export declare function choseAdapterAuto(): Promise<any>;
export declare function adapterFactory(): Promise<import("./naf-dialog-io-adapter").default | NafTwilioAdapter | import("./naf-dialog-io-data-only-adapter").default | import("./naf-agora-adapter").default | import("./naf-none-adapter").default | import("./naf-socketio-adapter").default>;
export declare function unpublishVideoTrack(): Promise<void>;
export declare function setlistenerEndShareVideo(): Promise<void>;
export declare function createTrack(constraints: any, isDisplayDevice: any): Promise<MediaStream>;
export declare function fetchICEservers(): Promise<any>;
export declare function filterServer(iceServers: any, forceTcp: any): any;
export declare function addIceServers(iceServer: any): any;
export declare function configureTurn(forceTurn: any, forceTcp: any, adapter: any): void;

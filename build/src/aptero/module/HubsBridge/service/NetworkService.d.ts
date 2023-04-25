import { AElement } from "aframe";
export declare class NetworkService {
    eventEmitter: any;
    private hubPhxChannel;
    constructor();
    start(): void;
    setPhoenixChannel(hubPhxChannel: any): void;
    sendMessage(type: string, data: any): void;
    onMessage(type: string, callback: (data: {
        session_id: string;
        type: string;
        body: any;
        from: string;
    }) => void): () => void;
    /**
     * Network utils
     */
    getClientId(): any;
    getElementNetworkId(element: AElement): Promise<unknown>;
    notifyAdapterReady(): void;
}
export declare const networkService: NetworkService;

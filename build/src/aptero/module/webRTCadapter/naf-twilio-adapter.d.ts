import EventEmitter from "eventemitter3";
export declare const DIALOG_CONNECTION_ERROR_FATAL = "dialog-connection-error-fatal";
export default class NafTwilioAdapter extends EventEmitter {
    private _micProducer;
    private _cameraProducer;
    private _shareProducer;
    private _localMediaStream;
    private _consumers;
    private _pendingMediaRequests;
    private _blockedClients;
    private _forceTcp;
    private _forceTurn;
    private _iceTransportPolicy;
    private scene;
    private _serverParams;
    private adapterUserListener;
    private _consumerStats;
    private _serverUrl;
    private _clientId;
    private _roomId;
    private _joinToken;
    private subAdapter;
    private _closed;
    private _micEnabled;
    private _micShouldBeEnabled;
    private lastTrack;
    constructor();
    get consumerStats(): any;
    /**
   * Gets transport/consumer/producer stats on the server side.
   */
    getServerStats(): Promise<{}>;
    iceRestart(transport: any): Promise<void>;
    recreateSendTransport(iceServers: any): Promise<void>;
    /**
     * Restart ICE in the underlying send peerconnection.
     */
    restartSendICE(): Promise<void>;
    /**
     * Checks the Send Transport ICE status and restarts it in case is in failed state.
     * This is called by the Send Transport "connectionstatechange" event listener.
     * @param {boolean} connectionState The transport connnection state (ICE connection state)
     */
    checkSendIceStatus(connectionState: any): void;
    recreateRecvTransport(iceServers: any): Promise<void>;
    /**
     * Restart ICE in the underlying receive peerconnection.
     * @param {boolean} force Forces the execution of the reconnect.
     */
    restartRecvICE(): Promise<void>;
    /**
     * Checks the ReeceiveReeceive Transport ICE status and restarts it in case is in failed state.
     * This is called by the Reeceive Transport "connectionstatechange" event listener.
     * @param {boolean} connectionState The transport connection state (ICE connection state)
     */
    checkRecvIceStatus(connectionState: any): void;
    reconnect(): Promise<void>;
    connect({ serverUrl, roomId, joinToken, serverParams, scene, clientId, forceTcp, forceTurn, iceTransportPolicy }: {
        serverUrl: any;
        roomId: any;
        joinToken: any;
        serverParams: any;
        scene: any;
        clientId: any;
        forceTcp: any;
        forceTurn: any;
        iceTransportPolicy: any;
    }): Promise<unknown>;
    _retryConnectWithNewHost(): Promise<void>;
    closePeer(peerId: any): void;
    resolvePendingMediaRequestForTrack(clientId: any, track: any): void;
    removeConsumer(consumerId: any): void;
    getMediaStream(clientId: any, kind?: string): Promise<unknown>;
    createSendTransport(iceServers: any): Promise<void>;
    closeSendTransport(): Promise<void>;
    createRecvTransport(iceServers: any): Promise<void>;
    closeRecvTransport(): Promise<void>;
    _joinRoom(): Promise<void>;
    setLocalMediaStream(stream: any): Promise<void>;
    enableCamera(track: any): Promise<void>;
    disableCamera(): Promise<void>;
    enableShare(track: any): Promise<void>;
    disableShare(): Promise<void>;
    toggleMicrophone(): void;
    enableMicrophone(enabled: boolean): void;
    get isMicEnabled(): boolean;
    cleanUpLocalState(): void;
    disconnect(): void;
    kick(clientId: any, permsToken: any): void;
    block(clientId: any): void;
    unblock(clientId: any): void;
    emitRTCEvent(level: any, tag: any, msgFunc: any): void;
    createTrack(constraints: any): Promise<MediaStream>;
}

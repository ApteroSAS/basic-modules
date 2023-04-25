import { IAgoraRTCClient } from "agora-rtc-sdk-ng";
export declare class AgoraAdapter {
    currentRoom: IAgoraRTCClient | null;
    private adapterUserListener;
    private _micProducer;
    private _videoProducer;
    private onTrackRemoved;
    constructor(adapterUserListener: any);
    convertId(clientid: any): any;
    enableMicrophone(enabled: any): void;
    isMicEnabled(): any;
    disableCamera(): Promise<void>;
    disableShare(): Promise<void>;
    createTrack(constraints: any): Promise<MediaStream>;
    connectRoom(clientId: any, roomId: any): Promise<void>;
    setOnTrack(onTrack: any): void;
    setOnTrackRemoved(onTrackRemoved: any): void;
    setOnParticipantDisconnected(onParticipantDisconnected: any): void;
    disconnect(): void;
    unpublishAudioTrack(): Promise<void>;
    unpublishVideoTrack(): Promise<void>;
    private onTrack;
    private onParticipantDisconnected;
}

import * as Video from "twilio-video";
export declare class TwilioAdapter {
    currentRoom: Video.Room | null;
    videoTrack: any;
    twilioMicEnable: boolean;
    onTrack: (a: any, b: any, c: any) => void;
    private adapterUserListener;
    private onParticipantDisconnected;
    constructor(adapterUserListener: any);
    convertId(twilioCLientId: any): any;
    unpublishGivenVideoTrack(track: any): Promise<void>;
    unpublishVideoTrack(): Promise<void>;
    enableMicrophone(enabled: any): void;
    isMicEnabled(): boolean;
    disableCamera(): Promise<void>;
    disableShare(): Promise<void>;
    createTrack(constraints: any): Promise<MediaStream>;
    connectRoom(clientId: any, roomId: any): Promise<void>;
    setOnTrack(onTrack: any): void;
    setOnTrackRemoved(onTrackRemoved: any): void;
    setOnParticipantDisconnected(onParticipantDisconnected: any): void;
    disconnect(): void;
    unpublishAudioTrack(): Promise<void>;
    private onTrackRemoved;
}

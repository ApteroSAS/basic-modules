export const MixerType: Readonly<{
    AVATAR: 0;
    MEDIA: 1;
}>;
export class AudioSystem {
    constructor(sceneEl: any);
    _sceneEl: any;
    audioContext: AudioContext;
    audioNodes: Map<any, any>;
    mediaStreamDestinationNode: MediaStreamAudioDestinationNode;
    audioDestination: MediaStreamAudioDestinationNode;
    outboundStream: MediaStream;
    outboundGainNode: GainNode;
    outboundAnalyser: AnalyserNode;
    analyserLevels: Uint8Array;
    audioContextNeedsToBeResumed: boolean;
    mixer: {
        1: GainNode;
        0: GainNode;
        2: GainNode;
    };
    mixerAnalyser: AnalyserNode;
    onPrefsUpdated: any;
    addStreamToOutboundAudio(id: any, mediaStream: any): void;
    removeStreamFromOutboundAudio(id: any): void;
    addAudio({ sourceType, node }: {
        sourceType: any;
        node: any;
    }): void;
    removeAudio({ node }: {
        node: any;
    }): void;
    updatePrefs(): void;
    outputMediaAudio: HTMLAudioElement;
    /**
     * Chrome and Safari will start Audio contexts in a "suspended" state.
     * A user interaction (touch/mouse event) is needed in order to resume the AudioContext.
     */
    _resumeAudioContext: () => void;
    _safariMobileAudioInterruptionFix(): void;
}

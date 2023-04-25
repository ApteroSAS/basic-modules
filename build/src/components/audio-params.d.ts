export declare const DISTANCE_MODEL_OPTIONS: string[];
export declare enum SourceType {
    MEDIA_VIDEO = 0,
    AVATAR_AUDIO_SOURCE = 1,
    SFX = 2,
    AUDIO_TARGET = 3,
    AUDIO_ZONE = 4
}
export declare enum AudioType {
    Stereo = "stereo",
    PannerNode = "pannernode"
}
export declare enum DistanceModelType {
    Linear = "linear",
    Inverse = "inverse",
    Exponential = "exponential"
}
export declare enum PanningModelType {
    HRTF = "HRTF",
    EqualPower = "equalpower"
}
export interface AudioSettings {
    audioType: AudioType;
    distanceModel: DistanceModelType;
    panningModel: PanningModelType;
    rolloffFactor: number;
    refDistance: number;
    maxDistance: number;
    coneInnerAngle: number;
    coneOuterAngle: number;
    coneOuterGain: number;
    gain: number;
}
export declare const AvatarAudioDefaults: AudioSettings;
export declare const MediaAudioDefaults: AudioSettings;
export declare const TargetAudioDefaults: AudioSettings;
export declare const GAIN_TIME_CONST = 0.2;

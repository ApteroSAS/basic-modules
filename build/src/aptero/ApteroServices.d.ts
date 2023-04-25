import "./module/ButtonAPI/component/custom-controller-button";
import "./module/HubsBridge/component/rtmp-auto-refresh";
import "./module/ButtonAPI/component/media-limiter";
import "./module/CustomPanel/component/open-iframe-button";
import "./module/ButtonAPI/component/stop-share-screen-on-destroy";
import "./module/ButtonAPI/component/release-media-frame-on-destroy";
import "./module/AudioZone/component/trigger";
import { AudioSettingsSystem } from "./../systems/audio-settings-system";
import "./module/webRTCadapter/adapter-config";
import { ThirdPersonService } from "./module/ThirdPerson/ThirdPersonService";
export declare const ENTERED_EVENT = "apt:room:entered";
export declare class ApteroServices {
    thirdPersonService: ThirdPersonService;
    private audioSettingsSystem;
    constructor();
    start(audioSettingsSystem: AudioSettingsSystem): void;
    onEnterRoom(): Promise<void>;
    tick(): void;
    remove(): Promise<void>;
    notifySceneEntered(): void;
    notifyLoadingState(state: any, action: any): void;
}
export declare let apteroService: ApteroServices;

import { IWorld } from "bitecs";
import "./aframe-to-bit-components";
import { AEntity, Networked, Object3DTag, Owned } from "./bit-components";
import MediaSearchStore from "./storage/media-search-store";
import Store from "./storage/store";
import type { AScene } from "aframe";
import HubChannel from "./utils/hub-channel";
import MediaDevicesManager from "./utils/media-devices-manager";
import { EffectComposer, EffectPass } from "postprocessing";
import { Audio, AudioListener, Object3D, PerspectiveCamera, PositionalAudio, Scene, WebGLRenderer } from "three";
import { AudioSettings, SourceType } from "./components/audio-params";
import DialogAdapter from "./aptero/module/webRTCadapter/naf-dialog-io-adapter";
import SceneEntryManager from "./scene-entry-manager";
declare global {
    let APP: App;
    interface Window {
        $O: (eid: number) => Object3D | undefined;
        APP: App;
    }
}
export interface HubsWorld extends IWorld {
    scene: Scene;
    nameToComponent: {
        object3d: typeof Object3DTag;
        networked: typeof Networked;
        owned: typeof Owned;
        AEntity: typeof AEntity;
    };
    ignoredNids: Set<number>;
    deletedNids: Set<number>;
    nid2eid: Map<number, number>;
    eid2obj: Map<number, Object3D>;
    time: {
        delta: number;
        elapsed: number;
        tick: number;
    };
}
export declare function getScene(): Promise<Scene>;
interface HubDescription {
    hub_id: string;
}
export declare class App {
    scene?: AScene;
    hubChannel?: HubChannel;
    hub?: HubDescription;
    mediaDevicesManager?: MediaDevicesManager;
    entryManager?: SceneEntryManager;
    messageDispatch?: any;
    store: Store;
    mediaSearchStore: MediaSearchStore;
    audios: Map<any, Audio<GainNode> | PositionalAudio>;
    sourceType: Map<any, SourceType>;
    audioOverrides: Map<any, AudioSettings>;
    zoneOverrides: Map<any, AudioSettings>;
    gainMultipliers: Map<any, number>;
    supplementaryAttenuation: Map<any, number>;
    clippingState: Set<any>;
    mutedState: Set<any>;
    isAudioPaused: Set<any>;
    audioDebugPanelOverrides: Map<SourceType, AudioSettings>;
    sceneAudioDefaults: Map<SourceType, AudioSettings>;
    moderatorAudioSource: Set<any>;
    world: HubsWorld;
    str2sid: Map<string | null, number>;
    sid2str: Map<number, string | null>;
    nextSid: number;
    audioListener: AudioListener;
    dialog: DialogAdapter;
    RENDER_ORDER: {
        HUD_BACKGROUND: number;
        HUD_ICONS: number;
        CURSOR: number;
    };
    fx: {
        composer?: EffectComposer;
        bloomAndTonemapPass?: EffectPass;
        tonemapOnlyPass?: EffectPass;
    };
    constructor();
    getSid(str: string): number;
    getString(sid: number): string;
    setupRenderer(sceneEl: AScene): {
        renderer: WebGLRenderer;
        camera: PerspectiveCamera;
        audioListener: AudioListener;
    };
}
export {};

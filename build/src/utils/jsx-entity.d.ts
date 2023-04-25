import { GrabbableParams } from "../inflators/grabbable";
import { VideoLoaderParams } from "../inflators/video-loader";
import { ImageLoaderParams } from "../inflators/image-loader";
import { ModelParams } from "../inflators/model";
import { BackgroundParams, EnvironmentSettingsParams, FogParams } from "../inflators/environment-settings";
import { WaypointParams } from "../inflators/waypoint";
import { ReflectionProbeParams } from "../inflators/reflection-probe";
import { HubsWorld } from "../app";
import { Object3D, Texture, VideoTexture } from "three";
import { AlphaMode } from "./create-image-mesh";
import { MediaLoaderParams } from "../inflators/media-loader";
import { DirectionalLightParams } from "../inflators/directional-light";
import { ProjectionMode } from "./projection-mode";
import { SkyboxParams } from "../inflators/skybox";
import { SpawnerParams } from "../inflators/spawner";
export declare class Ref {
    current: number | null;
    constructor(value: number | null);
}
export declare function createRef(value?: number | null): Ref;
export declare function resolveRef(world: HubsWorld, ref: Ref): number;
export type ArrayVec3 = [x: number, y: number, z: number];
export type Attrs = {
    position?: ArrayVec3;
    rotation?: ArrayVec3;
    scale?: ArrayVec3;
    visible?: boolean;
    name?: string;
    layers?: number;
    ref?: Ref;
};
export type EntityDef = {
    components: JSXComponentData;
    attrs: Attrs;
    children: EntityDef[];
    ref?: Ref;
};
type ComponentFn = string | ((attrs: Attrs & JSXComponentData, children?: EntityDef[]) => EntityDef);
export declare function createElementEntity(tag: "entity" | ComponentFn, attrs: Attrs & JSXComponentData, ...children: EntityDef[]): EntityDef;
export declare function addObject3DComponent(world: HubsWorld, eid: number, obj: Object3D): number;
export declare function swapObject3DComponent(world: HubsWorld, eid: number, obj: Object3D): number;
interface InflatorFn {
    (world: HubsWorld, eid: number, componentProps: any): void;
}
export interface ComponentData {
    directionalLight?: DirectionalLightParams;
    grabbable?: GrabbableParams;
}
export interface JSXComponentData extends ComponentData {
    slice9?: {
        size: [width: number, height: number];
        insets: [top: number, buttom: number, left: number, right: number];
        texture: Texture;
    };
    image?: {
        texture: Texture;
        ratio: number;
        projection: ProjectionMode;
        alphaMode: typeof AlphaMode.Blend | typeof AlphaMode.Mask | typeof AlphaMode.Opaque;
        cacheKey: string;
    };
    video?: {
        texture: VideoTexture;
        ratio: number;
        projection: ProjectionMode;
        autoPlay: boolean;
    };
    networkedVideo?: true;
    videoMenu?: {
        timeLabelRef: Ref;
        trackRef: Ref;
        headRef: Ref;
        playIndicatorRef: Ref;
        pauseIndicatorRef: Ref;
    };
    videoMenuItem?: true;
    cursorRaycastable?: true;
    remoteHoverTarget?: true;
    isNotRemoteHoverTarget?: true;
    handCollisionTarget?: true;
    offersRemoteConstraint?: true;
    offersHandConstraint?: true;
    singleActionButton?: true;
    holdableButton?: true;
    holdable?: true;
    deletable?: true;
    makeKinematicOnRelease?: true;
    destroyAtExtremeDistance?: true;
    networked?: any;
    textButton?: any;
    hoverButton?: any;
    rigidbody?: any;
    physicsShape?: any;
    floatyObject?: any;
    networkedFloatyObject?: any;
    networkedTransform?: any;
    objectMenu?: {
        pinButtonRef: Ref;
        unpinButtonRef: Ref;
        cameraFocusButtonRef: Ref;
        cameraTrackButtonRef: Ref;
        removeButtonRef: Ref;
        dropButtonRef: Ref;
        inspectButtonRef: Ref;
        deserializeDrawingButtonRef: Ref;
        openLinkButtonRef: Ref;
        refreshButtonRef: Ref;
        cloneButtonRef: Ref;
        rotateButtonRef: Ref;
        mirrorButtonRef: Ref;
        scaleButtonRef: Ref;
    };
    cameraTool?: {
        snapMenuRef: Ref;
        nextButtonRef: Ref;
        prevButtonRef: Ref;
        snapRef: Ref;
        cancelRef: Ref;
        recVideoRef: Ref;
        screenRef: Ref;
        selfieScreenRef: Ref;
        cameraRef: Ref;
        countdownLblRef: Ref;
        captureDurLblRef: Ref;
        sndToggleRef: Ref;
    };
    animationMixer?: any;
    mediaLoader?: MediaLoaderParams;
    sceneRoot?: boolean;
    sceneLoader?: {
        src: string;
    };
    mediaFrame?: any;
    object3D?: any;
    text?: any;
    model?: ModelParams;
    networkDebug?: boolean;
    waypointPreview?: boolean;
}
export interface GLTFComponentData extends ComponentData {
    video?: VideoLoaderParams;
    image?: ImageLoaderParams;
    environmentSettings?: EnvironmentSettingsParams;
    reflectionProbe?: ReflectionProbeParams;
    navMesh?: true;
    waypoint?: WaypointParams;
    spawner: SpawnerParams;
    spawnPoint?: true;
    skybox: SkyboxParams;
    fog: FogParams;
    background: BackgroundParams;
}
declare global {
    namespace createElementEntity.JSX {
        interface IntrinsicElements {
            entity: JSXComponentData & Attrs & {
                children?: IntrinsicElements[];
            };
        }
        interface ElementChildrenAttribute {
            children: {};
        }
    }
}
export declare const commonInflators: Required<{
    [K in keyof ComponentData]: InflatorFn;
}>;
export declare const gltfInflators: Required<{
    [K in keyof GLTFComponentData]: InflatorFn;
}>;
export declare function gltfInflatorExists(name: string): name is keyof GLTFComponentData;
export declare function renderAsEntity(world: HubsWorld, entityDef: EntityDef): number;
export {};

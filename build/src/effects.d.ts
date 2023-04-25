import type { AScene } from "aframe";
import { EffectComposer, EffectPass } from "postprocessing";
import { Camera, Scene, WebGLRenderer } from "three";
import Store from "./storage/store";
export declare function createEffectsComposer(canvas: HTMLCanvasElement, renderer: WebGLRenderer, camera: Camera, scene: Scene, sceneEl: AScene, store: Store): {
    composer: EffectComposer;
    bloomAndTonemapPass: EffectPass;
    tonemapOnlyPass: EffectPass;
};

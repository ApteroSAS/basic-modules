/// <reference types="webxr" />
import type { HubsSystems } from "aframe";
import { Camera, Scene, WebGLRenderer } from "three";
declare global {
    interface Window {
        $S: HubsSystems;
    }
}
export declare function mainTick(xrFrame: XRFrame, renderer: WebGLRenderer, scene: Scene, camera: Camera): void;

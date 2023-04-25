export function applySettings(audio: any, settings: any): void;
export function getOverriddenPanningModelType(): PanningModelType;
export function getCurrentAudioSettings(el: any): any;
export function getCurrentAudioSettingsForSourceType(sourceType: any): import("./components/audio-params").AudioSettings;
export function updateAudioSettings(elOrEid: any, audio: any): void;
export function shouldAddSupplementaryAttenuation(el: any, audio: any): boolean;
import { PanningModelType } from "./components/audio-params";

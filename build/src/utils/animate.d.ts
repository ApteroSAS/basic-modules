import { Vector3 } from "three";
type Value = Vector3 | number;
type AnimationProperty = [start: Value, end: Value];
type EasingFunction = (t: number) => number;
type AnimationCallback = (values: Value[]) => void;
type AnimationConfig = {
    properties: AnimationProperty[];
    durationMS: number;
    easing: EasingFunction;
    fn: AnimationCallback;
};
export declare function animate({ properties, durationMS, easing, fn }: AnimationConfig): Generator<Promise<void>, void, unknown>;
export {};

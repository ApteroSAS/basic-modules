export namespace paths {
    const noop: string;
    namespace actions {
        const log: string;
        const toggleScreenShare: string;
        const snapRotateLeft: string;
        const snapRotateRight: string;
        const rotateLeft: string;
        const rotateRight: string;
        const angularVelocity: string;
        const logDebugFrame: string;
        const logInteractionState: string;
        namespace debugUserInput {
            const describeCurrentMasks: string;
        }
        const cameraDelta: string;
        const lobbyCameraDelta: string;
        const characterAcceleration: string;
        const dCharSpeed: string;
        const boost: string;
        const startGazeTeleport: string;
        const stopGazeTeleport: string;
        const spawnPen: string;
        const ensureFrozen: string;
        const toggleFreeze: string;
        const thaw: string;
        const muteMic: string;
        const toggleFly: string;
        const toggleUI: string;
        const toggleRecord: string;
        const waypointDeltaDistance: string;
        const focusChat: string;
        const focusChatCommand: string;
        const toggleCamera: string;
        const takeSnapshot: string;
        const mediaExit: string;
        const mediaSearch1: string;
        const mediaSearch2: string;
        const mediaSearch3: string;
        const mediaSearch4: string;
        const mediaSearch5: string;
        const mediaSearch6: string;
        const mediaSearch7: string;
        const mediaSearch8: string;
        const transformModifier: string;
        const rayObjectRotation: string;
        namespace cursor {
            namespace right {
                export const pose: string;
                export const hideLine: string;
                export const grab: string;
                export const drop: string;
                export const modDelta: string;
                export const startDrawing: string;
                export const stopDrawing: string;
                export const undoDrawing: string;
                export const penNextColor: string;
                export const penPrevColor: string;
                export const scalePenTip: string;
                export const scaleGrabbedGrabbable: string;
                export const mediaVolumeMod: string;
                const takeSnapshot_1: string;
                export { takeSnapshot_1 as takeSnapshot };
                export const wake: string;
                export const togglePlayVideo: string;
                export const deleteEntity: string;
            }
            namespace left {
                const pose_1: string;
                export { pose_1 as pose };
                const hideLine_1: string;
                export { hideLine_1 as hideLine };
                const grab_1: string;
                export { grab_1 as grab };
                const drop_1: string;
                export { drop_1 as drop };
                const modDelta_1: string;
                export { modDelta_1 as modDelta };
                const startDrawing_1: string;
                export { startDrawing_1 as startDrawing };
                const stopDrawing_1: string;
                export { stopDrawing_1 as stopDrawing };
                const undoDrawing_1: string;
                export { undoDrawing_1 as undoDrawing };
                const penNextColor_1: string;
                export { penNextColor_1 as penNextColor };
                const penPrevColor_1: string;
                export { penPrevColor_1 as penPrevColor };
                const scalePenTip_1: string;
                export { scalePenTip_1 as scalePenTip };
                const scaleGrabbedGrabbable_1: string;
                export { scaleGrabbedGrabbable_1 as scaleGrabbedGrabbable };
                const mediaVolumeMod_1: string;
                export { mediaVolumeMod_1 as mediaVolumeMod };
                const takeSnapshot_2: string;
                export { takeSnapshot_2 as takeSnapshot };
                const wake_1: string;
                export { wake_1 as wake };
                const togglePlayVideo_1: string;
                export { togglePlayVideo_1 as togglePlayVideo };
                const deleteEntity_1: string;
                export { deleteEntity_1 as deleteEntity };
            }
        }
        namespace pen {
            const remove: string;
        }
        namespace rightHand {
            export const matrix: string;
            const pose_2: string;
            export { pose_2 as pose };
            const grab_2: string;
            export { grab_2 as grab };
            const drop_2: string;
            export { drop_2 as drop };
            const modDelta_2: string;
            export { modDelta_2 as modDelta };
            const startDrawing_2: string;
            export { startDrawing_2 as startDrawing };
            const stopDrawing_2: string;
            export { stopDrawing_2 as stopDrawing };
            const undoDrawing_2: string;
            export { undoDrawing_2 as undoDrawing };
            export const switchDrawMode: string;
            const penNextColor_2: string;
            export { penNextColor_2 as penNextColor };
            const penPrevColor_2: string;
            export { penPrevColor_2 as penPrevColor };
            const scalePenTip_2: string;
            export { scalePenTip_2 as scalePenTip };
            export const startTeleport: string;
            export const stopTeleport: string;
            const takeSnapshot_3: string;
            export { takeSnapshot_3 as takeSnapshot };
            export const thumb: string;
            export const index: string;
            export const middleRingPinky: string;
        }
        namespace leftHand {
            const matrix_1: string;
            export { matrix_1 as matrix };
            const pose_3: string;
            export { pose_3 as pose };
            const grab_3: string;
            export { grab_3 as grab };
            const drop_3: string;
            export { drop_3 as drop };
            const modDelta_3: string;
            export { modDelta_3 as modDelta };
            const startDrawing_3: string;
            export { startDrawing_3 as startDrawing };
            const stopDrawing_3: string;
            export { stopDrawing_3 as stopDrawing };
            const undoDrawing_3: string;
            export { undoDrawing_3 as undoDrawing };
            const switchDrawMode_1: string;
            export { switchDrawMode_1 as switchDrawMode };
            const penNextColor_3: string;
            export { penNextColor_3 as penNextColor };
            const penPrevColor_3: string;
            export { penPrevColor_3 as penPrevColor };
            const scalePenTip_3: string;
            export { scalePenTip_3 as scalePenTip };
            const startTeleport_1: string;
            export { startTeleport_1 as startTeleport };
            const stopTeleport_1: string;
            export { stopTeleport_1 as stopTeleport };
            const takeSnapshot_4: string;
            export { takeSnapshot_4 as takeSnapshot };
            const thumb_1: string;
            export { thumb_1 as thumb };
            const index_1: string;
            export { index_1 as index };
            const middleRingPinky_1: string;
            export { middleRingPinky_1 as middleRingPinky };
        }
        namespace camera {
            const exitMirror: string;
        }
        const startInspecting: string;
        const startInspectingSelf: string;
        const stopInspecting: string;
        const inspectZoom: string;
        const inspectPanY: string;
        const resetInspectView: string;
        const nextCameraMode: string;
        const spawnEmoji0: string;
        const spawnEmoji1: string;
        const spawnEmoji2: string;
        const spawnEmoji3: string;
        const spawnEmoji4: string;
        const spawnEmoji5: string;
        const spawnEmoji6: string;
    }
    namespace haptics {
        namespace actuators {
            const left: string;
            const right: string;
        }
    }
    namespace device {
        namespace mouse {
            const coords: string;
            const movementXY: string;
            const buttonLeft: string;
            const buttonRight: string;
            const buttonMiddle: string;
            const wheel: string;
        }
        namespace smartMouse {
            export const cursorPose: string;
            const cameraDelta_1: string;
            export { cameraDelta_1 as cameraDelta };
            export const shouldMoveCamera: string;
        }
        namespace touchscreen {
            const cursorPose_1: string;
            export { cursorPose_1 as cursorPose };
            export const touchCameraDelta: string;
            export const gyroCameraDelta: string;
            const cameraDelta_2: string;
            export { cameraDelta_2 as cameraDelta };
            export namespace pinch {
                const delta: string;
                const initialDistance: string;
                const currentDistance: string;
            }
            export const isTouching: string;
            export const isTouchingGrabbable: string;
            export const tap1: string;
            export const tap2: string;
            export const tap3: string;
            export const tap4: string;
            export const tap5: string;
            export const anything: string;
        }
        namespace gyro {
            const averageDeltaX: string;
            const averageDeltaY: string;
        }
        namespace hud {
            const penButton: string;
        }
        namespace keyboard {
            const map: Map<any, any>;
            function key(k: any): any;
        }
        function gamepad(gamepadIndex: any): {
            button: (buttonIndex: any) => {
                pressed: string;
                touched: string;
                value: string;
            };
            axis: (axisIndex: any) => string;
        };
        namespace xbox {
            function v(name: any): string;
            function button(buttonName: any): {
                pressed: string;
                touched: string;
                value: string;
            };
            function axis(axisName: any): string;
            const axesSum: string;
        }
        namespace oculusgo {
            export function button_1(buttonName: any): {
                pressed: string;
                touched: string;
                value: string;
            };
            export { button_1 as button };
            export function axis_1(axisName: any): string;
            export { axis_1 as axis };
            export namespace trigger {
                const pressed: string;
                const touched: string;
                const value: string;
            }
            export namespace touchpad {
                const pressed_1: string;
                export { pressed_1 as pressed };
                const touched_1: string;
                export { touched_1 as touched };
                const value_1: string;
                export { value_1 as value };
                export const axisX: string;
                export const axisY: string;
            }
            const pose_4: string;
            export { pose_4 as pose };
            const matrix_2: string;
            export { matrix_2 as matrix };
            export function v_1(name: any): string;
            export { v_1 as v };
        }
        namespace gearVRController {
            export function button_2(buttonName: any): {
                pressed: string;
                touched: string;
                value: string;
            };
            export { button_2 as button };
            export function axis_2(axisName: any): string;
            export { axis_2 as axis };
            const pose_5: string;
            export { pose_5 as pose };
            const matrix_3: string;
            export { matrix_3 as matrix };
            export function v_2(name: any): string;
            export { v_2 as v };
        }
        namespace daydream {
            export function button_3(buttonName: any): {
                pressed: string;
                touched: string;
                value: string;
            };
            export { button_3 as button };
            export function axis_3(axisName: any): string;
            export { axis_3 as axis };
            const pose_6: string;
            export { pose_6 as pose };
            const matrix_4: string;
            export { matrix_4 as matrix };
        }
        namespace rightOculusTouch {
            export function button_4(buttonName: any): {
                pressed: string;
                touched: string;
                value: string;
            };
            export { button_4 as button };
            export function axis_4(axisName: any): string;
            export { axis_4 as axis };
            const axesSum_1: string;
            export { axesSum_1 as axesSum };
            const pose_7: string;
            export { pose_7 as pose };
            const matrix_5: string;
            export { matrix_5 as matrix };
        }
        namespace leftOculusTouch {
            export function button_5(buttonName: any): {
                pressed: string;
                touched: string;
                value: string;
            };
            export { button_5 as button };
            export function axis_5(axisName: any): string;
            export { axis_5 as axis };
            const axesSum_2: string;
            export { axesSum_2 as axesSum };
            const pose_8: string;
            export { pose_8 as pose };
            const matrix_6: string;
            export { matrix_6 as matrix };
        }
        namespace vive {
            export namespace left_1 {
                export function button_6(buttonName: any): {
                    pressed: string;
                    touched: string;
                    value: string;
                };
                export { button_6 as button };
                export function axis_6(axisName: any): string;
                export { axis_6 as axis };
                const axesSum_3: string;
                export { axesSum_3 as axesSum };
                const pose_9: string;
                export { pose_9 as pose };
                const matrix_7: string;
                export { matrix_7 as matrix };
            }
            export { left_1 as left };
            export namespace right_1 {
                export function button_7(buttonName: any): {
                    pressed: string;
                    touched: string;
                    value: string;
                };
                export { button_7 as button };
                export function axis_7(axisName: any): string;
                export { axis_7 as axis };
                const axesSum_4: string;
                export { axesSum_4 as axesSum };
                const pose_10: string;
                export { pose_10 as pose };
                const matrix_8: string;
                export { matrix_8 as matrix };
            }
            export { right_1 as right };
        }
        namespace wmr {
            export function v(name: any): string;
            export function k(name: any): string;
            export namespace left_2 {
                export namespace touchpad_1 {
                    const axisX_1: string;
                    export { axisX_1 as axisX };
                    const axisY_1: string;
                    export { axisY_1 as axisY };
                    const pressed_2: string;
                    export { pressed_2 as pressed };
                    const touched_2: string;
                    export { touched_2 as touched };
                    const value_2: string;
                    export { value_2 as value };
                }
                export { touchpad_1 as touchpad };
                export namespace trigger_1 { }
                export { trigger_1 as trigger };
                export namespace grip { }
                export namespace menu { }
                export namespace joystick { }
                const pose_11: string;
                export { pose_11 as pose };
                const matrix_9: string;
                export { matrix_9 as matrix };
            }
            export { left_2 as left };
            export namespace right_2 { }
            export { right_2 as right };
        }
        namespace webxr {
            export namespace right_3 {
                export namespace button_8 {
                    export namespace trigger_2 { }
                    export { trigger_2 as trigger };
                    export namespace grip_1 { }
                    export { grip_1 as grip };
                    export namespace touchpad_2 { }
                    export { touchpad_2 as touchpad };
                    export namespace a { }
                    export namespace b { }
                    export namespace thumbStick { }
                }
                export { button_8 as button };
                export namespace axis_8 {
                    const touchpadX: string;
                    const touchpadY: string;
                    const joyX: string;
                    const joyY: string;
                }
                export { axis_8 as axis };
                const pose_12: string;
                export { pose_12 as pose };
                const matrix_10: string;
                export { matrix_10 as matrix };
            }
            export { right_3 as right };
            export namespace left_3 {
                export namespace button_9 {
                    export namespace trigger_3 { }
                    export { trigger_3 as trigger };
                    export namespace grip_2 { }
                    export { grip_2 as grip };
                    export namespace touchpad_3 { }
                    export { touchpad_3 as touchpad };
                    export namespace a_1 { }
                    export { a_1 as a };
                    export namespace b_1 { }
                    export { b_1 as b };
                    export namespace thumbStick_1 { }
                    export { thumbStick_1 as thumbStick };
                }
                export { button_9 as button };
                export namespace axis_9 {
                    const touchpadX_1: string;
                    export { touchpadX_1 as touchpadX };
                    const touchpadY_1: string;
                    export { touchpadY_1 as touchpadY };
                    const joyX_1: string;
                    export { joyX_1 as joyX };
                    const joyY_1: string;
                    export { joyY_1 as joyY };
                }
                export { axis_9 as axis };
                const pose_13: string;
                export { pose_13 as pose };
                const matrix_11: string;
                export { matrix_11 as matrix };
            }
            export { left_3 as left };
        }
    }
}

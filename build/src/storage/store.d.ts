export namespace SCHEMA {
    export const id: string;
    export namespace definitions {
        namespace profile {
            const type: string;
            const additionalProperties: boolean;
            namespace properties {
                namespace displayName {
                    const type_1: string;
                    export { type_1 as type };
                    export const pattern: string;
                }
                namespace avatarId {
                    const type_2: string;
                    export { type_2 as type };
                }
                namespace companyName {
                    const type_3: string;
                    export { type_3 as type };
                }
                namespace jobTitleName {
                    const type_4: string;
                    export { type_4 as type };
                }
                namespace phoneNumber {
                    const type_5: string;
                    export { type_5 as type };
                }
                namespace description {
                    const type_6: string;
                    export { type_6 as type };
                }
                namespace profilePicture {
                    const type_7: string;
                    export { type_7 as type };
                }
                namespace microsoftUserprofilePicture {
                    const type_8: string;
                    export { type_8 as type };
                }
                namespace microsoftUser {
                    const type_9: string;
                    export { type_9 as type };
                }
                namespace personalAvatarId {
                    const type_10: string;
                    export { type_10 as type };
                }
            }
        }
        namespace credentials {
            const type_11: string;
            export { type_11 as type };
            const additionalProperties_1: boolean;
            export { additionalProperties_1 as additionalProperties };
            export namespace properties_1 {
                namespace token {
                    const type_12: string[];
                    export { type_12 as type };
                }
                namespace email {
                    const type_13: string[];
                    export { type_13 as type };
                }
            }
            export { properties_1 as properties };
        }
        namespace activity {
            const type_14: string;
            export { type_14 as type };
            const additionalProperties_2: boolean;
            export { additionalProperties_2 as additionalProperties };
            export namespace properties_2 {
                namespace hasFoundFreeze {
                    const type_15: string;
                    export { type_15 as type };
                }
                namespace hasChangedName {
                    const type_16: string;
                    export { type_16 as type };
                }
                namespace hasAcceptedProfile {
                    const type_17: string;
                    export { type_17 as type };
                }
                namespace hasChangedPicture {
                    const type_18: string;
                    export { type_18 as type };
                }
                namespace hasChangedAvatar {
                    const type_19: string;
                    export { type_19 as type };
                }
                namespace lastEnteredAt {
                    const type_20: string;
                    export { type_20 as type };
                }
                namespace hasPinned {
                    const type_21: string;
                    export { type_21 as type };
                }
                namespace hasRotated {
                    const type_22: string;
                    export { type_22 as type };
                }
                namespace hasRecentered {
                    const type_23: string;
                    export { type_23 as type };
                }
                namespace hasScaled {
                    const type_24: string;
                    export { type_24 as type };
                }
                namespace hasHoveredInWorldHud {
                    const type_25: string;
                    export { type_25 as type };
                }
                namespace hasOpenedShare {
                    const type_26: string;
                    export { type_26 as type };
                }
                namespace entryCount {
                    const type_27: string;
                    export { type_27 as type };
                }
            }
            export { properties_2 as properties };
        }
        namespace settings {
            const type_28: string;
            export { type_28 as type };
            const additionalProperties_3: boolean;
            export { additionalProperties_3 as additionalProperties };
            export namespace properties_3 {
                namespace lastUsedMicDeviceId {
                    const type_29: string;
                    export { type_29 as type };
                }
                namespace micMuted {
                    const type_30: string;
                    export { type_30 as type };
                }
            }
            export { properties_3 as properties };
        }
        namespace preferences {
            const type_31: string;
            export { type_31 as type };
            const additionalProperties_4: boolean;
            export { additionalProperties_4 as additionalProperties };
            export namespace properties_4 {
                namespace shouldPromptForRefresh {
                    const type_32: string;
                    export { type_32 as type };
                    const _default: boolean;
                    export { _default as default };
                }
                namespace preferredMic {
                    const type_33: string;
                    export { type_33 as type };
                    export { NO_DEVICE_ID as default };
                }
                namespace preferredSpeakers {
                    const type_34: string;
                    export { type_34 as type };
                    export { NO_DEVICE_ID as default };
                }
                namespace preferredCamera {
                    const type_35: string;
                    export { type_35 as type };
                    export { NO_DEVICE_ID as default };
                }
                namespace muteMicOnEntry {
                    const type_36: string;
                    export { type_36 as type };
                    const _default_1: boolean;
                    export { _default_1 as default };
                }
                namespace disableLeftRightPanning {
                    const type_37: string;
                    export { type_37 as type };
                    const _default_2: boolean;
                    export { _default_2 as default };
                }
                namespace audioNormalization {
                    const type_38: string;
                    export { type_38 as type };
                    const _default_3: number;
                    export { _default_3 as default };
                }
                namespace invertTouchscreenCameraMove {
                    const type_39: string;
                    export { type_39 as type };
                    const _default_4: boolean;
                    export { _default_4 as default };
                }
                namespace enableOnScreenJoystickLeft {
                    const type_40: string;
                    export { type_40 as type };
                    const _default_5: boolean;
                    export { _default_5 as default };
                }
                namespace enableOnScreenJoystickRight {
                    const type_41: string;
                    export { type_41 as type };
                    const _default_6: boolean;
                    export { _default_6 as default };
                }
                namespace enableGyro {
                    const type_42: string;
                    export { type_42 as type };
                    const _default_7: boolean;
                    export { _default_7 as default };
                }
                namespace animateWaypointTransitions {
                    const type_43: string;
                    export { type_43 as type };
                    const _default_8: boolean;
                    export { _default_8 as default };
                }
                namespace showFPSCounter {
                    const type_44: string;
                    export { type_44 as type };
                    const _default_9: boolean;
                    export { _default_9 as default };
                }
                namespace allowMultipleHubsInstances {
                    const type_45: string;
                    export { type_45 as type };
                    const _default_10: boolean;
                    export { _default_10 as default };
                }
                namespace disableIdleDetection {
                    const type_46: string;
                    export { type_46 as type };
                    const _default_11: boolean;
                    export { _default_11 as default };
                }
                namespace fastRoomSwitching {
                    const type_47: string;
                    export { type_47 as type };
                    const _default_12: boolean;
                    export { _default_12 as default };
                }
                namespace lazyLoadSceneMedia {
                    const type_48: string;
                    export { type_48 as type };
                    const _default_13: boolean;
                    export { _default_13 as default };
                }
                namespace preferMobileObjectInfoPanel {
                    const type_49: string;
                    export { type_49 as type };
                    const _default_14: boolean;
                    export { _default_14 as default };
                }
                namespace maxResolutionWidth {
                    const type_50: string;
                    export { type_50 as type };
                    const _default_15: any;
                    export { _default_15 as default };
                }
                namespace maxResolutionHeight {
                    const type_51: string;
                    export { type_51 as type };
                    const _default_16: any;
                    export { _default_16 as default };
                }
                namespace globalVoiceVolume {
                    const type_52: string;
                    export { type_52 as type };
                    const _default_17: number;
                    export { _default_17 as default };
                }
                namespace globalMediaVolume {
                    const type_53: string;
                    export { type_53 as type };
                    const _default_18: number;
                    export { _default_18 as default };
                }
                namespace globalSFXVolume {
                    const type_54: string;
                    export { type_54 as type };
                    const _default_19: number;
                    export { _default_19 as default };
                }
                namespace snapRotationDegrees {
                    const type_55: string;
                    export { type_55 as type };
                    const _default_20: number;
                    export { _default_20 as default };
                }
                namespace materialQualitySetting {
                    const type_56: string;
                    export { type_56 as type };
                    export { defaultMaterialQuality as default };
                }
                namespace enableDynamicShadows {
                    const type_57: string;
                    export { type_57 as type };
                    const _default_21: boolean;
                    export { _default_21 as default };
                }
                namespace disableSoundEffects {
                    const type_58: string;
                    export { type_58 as type };
                    const _default_22: boolean;
                    export { _default_22 as default };
                }
                namespace disableMovement {
                    const type_59: string;
                    export { type_59 as type };
                    const _default_23: boolean;
                    export { _default_23 as default };
                }
                namespace disableBackwardsMovement {
                    const type_60: string;
                    export { type_60 as type };
                    const _default_24: boolean;
                    export { _default_24 as default };
                }
                namespace disableStrafing {
                    const type_61: string;
                    export { type_61 as type };
                    const _default_25: boolean;
                    export { _default_25 as default };
                }
                namespace disableTeleporter {
                    const type_62: string;
                    export { type_62 as type };
                    const _default_26: boolean;
                    export { _default_26 as default };
                }
                namespace disableAutoPixelRatio {
                    const type_63: string;
                    export { type_63 as type };
                    const _default_27: boolean;
                    export { _default_27 as default };
                }
                namespace movementSpeedModifier {
                    const type_64: string;
                    export { type_64 as type };
                    const _default_28: number;
                    export { _default_28 as default };
                }
                namespace disableEchoCancellation {
                    const type_65: string;
                    export { type_65 as type };
                    export { isFirefoxReality as default };
                }
                namespace disableNoiseSuppression {
                    const type_66: string;
                    export { type_66 as type };
                    export { isFirefoxReality as default };
                }
                namespace disableAutoGainControl {
                    const type_67: string;
                    export { type_67 as type };
                    export { isFirefoxReality as default };
                }
                namespace locale {
                    const type_68: string;
                    export { type_68 as type };
                    const _default_29: string;
                    export { _default_29 as default };
                }
                namespace showRtcDebugPanel {
                    const type_69: string;
                    export { type_69 as type };
                    const _default_30: boolean;
                    export { _default_30 as default };
                }
                namespace showAudioDebugPanel {
                    const type_70: string;
                    export { type_70 as type };
                    const _default_31: boolean;
                    export { _default_31 as default };
                }
                namespace enableAudioClipping {
                    const type_71: string;
                    export { type_71 as type };
                    const _default_32: boolean;
                    export { _default_32 as default };
                }
                namespace audioClippingThreshold {
                    const type_72: string;
                    export { type_72 as type };
                    const _default_33: number;
                    export { _default_33 as default };
                }
                namespace audioPanningQuality {
                    const type_73: string;
                    export { type_73 as type };
                    const _default_34: string;
                    export { _default_34 as default };
                }
                namespace theme {
                    const type_74: string;
                    export { type_74 as type };
                    const _default_35: any;
                    export { _default_35 as default };
                }
                namespace cursorSize {
                    const type_75: string;
                    export { type_75 as type };
                    const _default_36: number;
                    export { _default_36 as default };
                }
                namespace nametagVisibility {
                    const type_76: string;
                    export { type_76 as type };
                    const _default_37: string;
                    export { _default_37 as default };
                }
                namespace nametagVisibilityDistance {
                    const type_77: string;
                    export { type_77 as type };
                    const _default_38: number;
                    export { _default_38 as default };
                }
                namespace avatarVoiceLevels {
                    const type_78: string;
                    export { type_78 as type };
                }
                namespace enablePostEffects {
                    const type_79: string;
                    export { type_79 as type };
                    const _default_39: boolean;
                    export { _default_39 as default };
                }
                namespace enableBloom {
                    const type_80: string;
                    export { type_80 as type };
                    const _default_40: boolean;
                    export { _default_40 as default };
                }
                namespace aaMode {
                    const type_81: string;
                    export { type_81 as type };
                    const _default_41: AAModes;
                    export { _default_41 as default };
                }
            }
            export { properties_4 as properties };
        }
        namespace confirmedDiscordRooms {
            const type_82: string;
            export { type_82 as type };
            export namespace items {
                const type_83: string;
                export { type_83 as type };
            }
        }
        namespace confirmedBroadcastedRooms {
            const type_84: string;
            export { type_84 as type };
            export namespace items_1 {
                const type_85: string;
                export { type_85 as type };
            }
            export { items_1 as items };
        }
        namespace uploadPromotionTokens {
            const type_86: string;
            export { type_86 as type };
            export namespace items_2 {
                const type_87: string;
                export { type_87 as type };
                const additionalProperties_5: boolean;
                export { additionalProperties_5 as additionalProperties };
                export namespace properties_5 {
                    namespace fileId {
                        const type_88: string;
                        export { type_88 as type };
                    }
                    namespace promotionToken {
                        const type_89: string;
                        export { type_89 as type };
                    }
                }
                export { properties_5 as properties };
            }
            export { items_2 as items };
        }
        namespace creatorAssignmentTokens {
            const type_90: string;
            export { type_90 as type };
            export namespace items_3 {
                const type_91: string;
                export { type_91 as type };
                const additionalProperties_6: boolean;
                export { additionalProperties_6 as additionalProperties };
                export namespace properties_6 {
                    namespace hubId {
                        const type_92: string;
                        export { type_92 as type };
                    }
                    namespace creatorAssignmentToken {
                        const type_93: string;
                        export { type_93 as type };
                    }
                }
                export { properties_6 as properties };
            }
            export { items_3 as items };
        }
        namespace embedTokens {
            const type_94: string;
            export { type_94 as type };
            export namespace items_4 {
                const type_95: string;
                export { type_95 as type };
                const additionalProperties_7: boolean;
                export { additionalProperties_7 as additionalProperties };
                export namespace properties_7 {
                    export namespace hubId_1 {
                        const type_96: string;
                        export { type_96 as type };
                    }
                    export { hubId_1 as hubId };
                    export namespace embedToken {
                        const type_97: string;
                        export { type_97 as type };
                    }
                }
                export { properties_7 as properties };
            }
            export { items_4 as items };
        }
        namespace onLoadActions {
            const type_98: string;
            export { type_98 as type };
            export namespace items_5 {
                const type_99: string;
                export { type_99 as type };
                const additionalProperties_8: boolean;
                export { additionalProperties_8 as additionalProperties };
                export namespace properties_8 {
                    namespace action {
                        const type_100: string;
                        export { type_100 as type };
                    }
                    namespace args {
                        const type_101: string;
                        export { type_101 as type };
                    }
                }
                export { properties_8 as properties };
            }
            export { items_5 as items };
        }
    }
    const type_102: string;
    export { type_102 as type };
    export namespace properties_9 {
        export namespace profile_1 {
            const $ref: string;
        }
        export { profile_1 as profile };
        export namespace credentials_1 {
            const $ref_1: string;
            export { $ref_1 as $ref };
        }
        export { credentials_1 as credentials };
        export namespace activity_1 {
            const $ref_2: string;
            export { $ref_2 as $ref };
        }
        export { activity_1 as activity };
        export namespace settings_1 {
            const $ref_3: string;
            export { $ref_3 as $ref };
        }
        export { settings_1 as settings };
        export namespace preferences_1 {
            const $ref_4: string;
            export { $ref_4 as $ref };
        }
        export { preferences_1 as preferences };
        export namespace confirmedDiscordRooms_1 {
            const $ref_5: string;
            export { $ref_5 as $ref };
        }
        export { confirmedDiscordRooms_1 as confirmedDiscordRooms };
        export namespace confirmedBroadcastedRooms_1 {
            const $ref_6: string;
            export { $ref_6 as $ref };
        }
        export { confirmedBroadcastedRooms_1 as confirmedBroadcastedRooms };
        export namespace uploadPromotionTokens_1 {
            const $ref_7: string;
            export { $ref_7 as $ref };
        }
        export { uploadPromotionTokens_1 as uploadPromotionTokens };
        export namespace creatorAssignmentTokens_1 {
            const $ref_8: string;
            export { $ref_8 as $ref };
        }
        export { creatorAssignmentTokens_1 as creatorAssignmentTokens };
        export namespace embedTokens_1 {
            const $ref_9: string;
            export { $ref_9 as $ref };
        }
        export { embedTokens_1 as embedTokens };
        export namespace onLoadActions_1 {
            const $ref_10: string;
            export { $ref_10 as $ref };
        }
        export { onLoadActions_1 as onLoadActions };
    }
    export { properties_9 as properties };
    const additionalProperties_9: boolean;
    export { additionalProperties_9 as additionalProperties };
}
export default class Store {
    _preferences: {};
    _shouldResetAvatarOnInit: boolean;
    _signOutOnExpiredAuthToken: () => void;
    initProfile: () => Promise<void>;
    resetToRandomDefaultAvatar: () => Promise<void>;
    get state(): any;
    get credentialsAccountId(): any;
    resetConfirmedBroadcastedRooms(): void;
    resetTipActivityFlags(): void;
    bumpEntryCount(): void;
    enqueueOnLoadAction(action: any, args: any): void;
    executeOnLoadActions(sceneEl: any): void;
    clearOnLoadActions(): void;
    clearStoredArray(key: any): void;
    update(newState: any, mergeOpts: any): any;
    getEmbedTokenForHub(hub: any): any;
    get schema(): {
        id: string;
        definitions: {
            profile: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    displayName: {
                        type: string;
                        pattern: string;
                    };
                    avatarId: {
                        type: string;
                    };
                    companyName: {
                        type: string;
                    };
                    jobTitleName: {
                        type: string;
                    };
                    phoneNumber: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    profilePicture: {
                        type: string;
                    };
                    microsoftUserprofilePicture: {
                        type: string;
                    };
                    microsoftUser: {
                        type: string;
                    };
                    personalAvatarId: {
                        type: string;
                    };
                };
            };
            credentials: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    token: {
                        type: string[];
                    };
                    email: {
                        type: string[];
                    };
                };
            };
            activity: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    hasFoundFreeze: {
                        type: string;
                    };
                    hasChangedName: {
                        type: string;
                    };
                    hasAcceptedProfile: {
                        type: string;
                    };
                    hasChangedPicture: {
                        type: string;
                    };
                    hasChangedAvatar: {
                        type: string;
                    };
                    lastEnteredAt: {
                        type: string;
                    };
                    hasPinned: {
                        type: string;
                    };
                    hasRotated: {
                        type: string;
                    };
                    hasRecentered: {
                        type: string;
                    };
                    hasScaled: {
                        type: string;
                    };
                    hasHoveredInWorldHud: {
                        type: string;
                    };
                    hasOpenedShare: {
                        type: string;
                    };
                    entryCount: {
                        type: string;
                    };
                };
            };
            settings: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    lastUsedMicDeviceId: {
                        type: string;
                    };
                    micMuted: {
                        type: string;
                    };
                };
            };
            preferences: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    shouldPromptForRefresh: {
                        type: string;
                        default: boolean;
                    };
                    preferredMic: {
                        type: string;
                        default: string;
                    };
                    preferredSpeakers: {
                        type: string;
                        default: string;
                    };
                    preferredCamera: {
                        type: string;
                        default: string;
                    };
                    muteMicOnEntry: {
                        type: string;
                        default: boolean;
                    };
                    disableLeftRightPanning: {
                        type: string;
                        default: boolean;
                    };
                    audioNormalization: {
                        type: string;
                        default: number;
                    };
                    invertTouchscreenCameraMove: {
                        type: string;
                        default: boolean;
                    };
                    enableOnScreenJoystickLeft: {
                        type: string;
                        default: boolean;
                    };
                    enableOnScreenJoystickRight: {
                        type: string;
                        default: boolean;
                    };
                    enableGyro: {
                        type: string;
                        default: boolean;
                    };
                    animateWaypointTransitions: {
                        type: string;
                        default: boolean;
                    };
                    showFPSCounter: {
                        type: string;
                        default: boolean;
                    };
                    allowMultipleHubsInstances: {
                        type: string;
                        default: boolean;
                    };
                    disableIdleDetection: {
                        type: string;
                        default: boolean;
                    };
                    fastRoomSwitching: {
                        type: string;
                        default: boolean;
                    };
                    lazyLoadSceneMedia: {
                        type: string;
                        default: boolean;
                    };
                    preferMobileObjectInfoPanel: {
                        type: string;
                        default: boolean;
                    };
                    maxResolutionWidth: {
                        type: string;
                        default: any;
                    };
                    maxResolutionHeight: {
                        type: string;
                        default: any;
                    };
                    globalVoiceVolume: {
                        type: string;
                        default: number;
                    };
                    globalMediaVolume: {
                        type: string;
                        default: number;
                    };
                    globalSFXVolume: {
                        type: string;
                        default: number;
                    };
                    snapRotationDegrees: {
                        type: string;
                        default: number;
                    };
                    materialQualitySetting: {
                        type: string;
                        default: string;
                    };
                    enableDynamicShadows: {
                        type: string;
                        default: boolean;
                    };
                    disableSoundEffects: {
                        type: string;
                        default: boolean;
                    };
                    disableMovement: {
                        type: string;
                        default: boolean;
                    };
                    disableBackwardsMovement: {
                        type: string;
                        default: boolean;
                    };
                    disableStrafing: {
                        type: string;
                        default: boolean;
                    };
                    disableTeleporter: {
                        type: string;
                        default: boolean;
                    };
                    disableAutoPixelRatio: {
                        type: string;
                        default: boolean;
                    };
                    movementSpeedModifier: {
                        type: string;
                        default: number;
                    };
                    disableEchoCancellation: {
                        type: string;
                        default: RegExpMatchArray;
                    };
                    disableNoiseSuppression: {
                        type: string;
                        default: RegExpMatchArray;
                    };
                    disableAutoGainControl: {
                        type: string;
                        default: RegExpMatchArray;
                    };
                    locale: {
                        type: string;
                        default: string;
                    };
                    showRtcDebugPanel: {
                        type: string;
                        default: boolean;
                    };
                    showAudioDebugPanel: {
                        type: string;
                        default: boolean;
                    };
                    enableAudioClipping: {
                        type: string;
                        default: boolean;
                    };
                    audioClippingThreshold: {
                        type: string;
                        default: number;
                    };
                    audioPanningQuality: {
                        type: string;
                        default: string;
                    };
                    theme: {
                        type: string;
                        default: any;
                    };
                    cursorSize: {
                        type: string;
                        default: number;
                    };
                    nametagVisibility: {
                        type: string;
                        default: string;
                    };
                    nametagVisibilityDistance: {
                        type: string;
                        default: number;
                    };
                    avatarVoiceLevels: {
                        type: string;
                    };
                    enablePostEffects: {
                        type: string;
                        default: boolean;
                    };
                    enableBloom: {
                        type: string;
                        default: boolean;
                    };
                    aaMode: {
                        type: string;
                        default: AAModes;
                    };
                };
            };
            confirmedDiscordRooms: {
                type: string;
                items: {
                    type: string;
                };
            };
            confirmedBroadcastedRooms: {
                type: string;
                items: {
                    type: string;
                };
            };
            uploadPromotionTokens: {
                type: string;
                items: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        fileId: {
                            type: string;
                        };
                        promotionToken: {
                            type: string;
                        };
                    };
                };
            };
            creatorAssignmentTokens: {
                type: string;
                items: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        hubId: {
                            type: string;
                        };
                        creatorAssignmentToken: {
                            type: string;
                        };
                    };
                };
            };
            embedTokens: {
                type: string;
                items: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        hubId: {
                            type: string;
                        };
                        embedToken: {
                            type: string;
                        };
                    };
                };
            };
            onLoadActions: {
                type: string;
                items: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        action: {
                            type: string;
                        };
                        args: {
                            type: string;
                        };
                    };
                };
            };
        };
        type: string;
        properties: {
            profile: {
                $ref: string;
            };
            credentials: {
                $ref: string;
            };
            activity: {
                $ref: string;
            };
            settings: {
                $ref: string;
            };
            preferences: {
                $ref: string;
            };
            confirmedDiscordRooms: {
                $ref: string;
            };
            confirmedBroadcastedRooms: {
                $ref: string;
            };
            uploadPromotionTokens: {
                $ref: string;
            };
            creatorAssignmentTokens: {
                $ref: string;
            };
            embedTokens: {
                $ref: string;
            };
            onLoadActions: {
                $ref: string;
            };
        };
        additionalProperties: boolean;
    };
    [STORE_STATE_CACHE_KEY]: any;
}
import { NO_DEVICE_ID } from "../utils/media-devices-utils.js";
declare const defaultMaterialQuality: string;
declare const isFirefoxReality: RegExpMatchArray;
import { AAModes } from "../constants";
declare const STORE_STATE_CACHE_KEY: unique symbol;
export {};

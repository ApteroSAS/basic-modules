/// <reference types="bitecs" />
export const $isStringType: unique symbol;
export const Networked: import("bitecs").ComponentType<{
    id: "ui32";
    creator: "ui32";
    owner: "ui32";
    lastOwnerTime: "ui32";
    timestamp: "ui32";
}>;
export const Owned: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const NetworkedMediaFrame: import("bitecs").ComponentType<{
    capturedNid: "ui32";
    scale: ["f32", number];
}>;
export const MediaFrame: import("bitecs").ComponentType<{
    capturedNid: "ui32";
    scale: ["f32", number];
    mediaType: "ui8";
    bounds: ["f32", number];
    preview: "eid";
    previewingNid: "eid";
}>;
export const Text: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const ReflectionProbe: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const Slice9: import("bitecs").ComponentType<{
    insets: ["ui32", number];
    size: ["f32", number];
}>;
export const NetworkedTransform: import("bitecs").ComponentType<{
    position: ["f32", number];
    rotation: ["f32", number];
    scale: ["f32", number];
}>;
export const AEntity: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const Object3DTag: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const GLTFModel: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const DirectionalLight: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const CursorRaycastable: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const RemoteHoverTarget: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const NotRemoteHoverTarget: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const Holdable: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const RemoveNetworkedEntityButton: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const Interacted: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const HandRight: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const HandLeft: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const RemoteRight: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const RemoteLeft: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const HoveredHandRight: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const HoveredHandLeft: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const HoveredRemoteRight: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const HoveredRemoteLeft: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const HeldHandRight: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const HeldHandLeft: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const HeldRemoteRight: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const HeldRemoteLeft: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const Held: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const Constraint: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const ConstraintHandRight: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const ConstraintHandLeft: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const ConstraintRemoteRight: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const ConstraintRemoteLeft: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const OffersRemoteConstraint: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const HandCollisionTarget: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const OffersHandConstraint: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const TogglesHoveredActionSet: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const HoverButton: import("bitecs").ComponentType<{
    type: "ui8";
}>;
export const TextButton: import("bitecs").ComponentType<{
    labelRef: "eid";
}>;
export const HoldableButton: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const SingleActionButton: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const Pen: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const HoverMenuChild: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const Static: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const Inspectable: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const PreventAudioBoost: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const IgnoreSpaceBubble: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const Rigidbody: import("bitecs").ComponentType<{
    bodyId: "ui16";
    collisionGroup: "ui32";
    collisionMask: "ui32";
    flags: "ui8";
    gravity: "f32";
}>;
export const PhysicsShape: import("bitecs").ComponentType<{
    bodyId: "ui16";
    shapeId: "ui16";
    halfExtents: ["f32", number];
}>;
export const Pinnable: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const Pinned: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const DestroyAtExtremeDistance: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const MediaLoading: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const FloatyObject: import("bitecs").ComponentType<{
    flags: "ui8";
    releaseGravity: "f32";
}>;
export const NetworkedFloatyObject: import("bitecs").ComponentType<{
    flags: "ui8";
}>;
export const MakeKinematicOnRelease: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const CameraTool: import("bitecs").ComponentType<{
    snapTime: "f32";
    state: "ui8";
    captureDurIdx: "ui8";
    trackTarget: "eid";
    snapMenuRef: "eid";
    nextButtonRef: "eid";
    prevButtonRef: "eid";
    snapRef: "eid";
    cancelRef: "eid";
    recVideoRef: "eid";
    screenRef: "eid";
    selfieScreenRef: "eid";
    cameraRef: "eid";
    countdownLblRef: "eid";
    captureDurLblRef: "eid";
    sndToggleRef: "eid";
}>;
export const MyCameraTool: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const MediaLoader: import("bitecs").ComponentType<{
    src: "ui32";
    flags: "ui8";
}>;
export const SceneRoot: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const NavMesh: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const SceneLoader: import("bitecs").ComponentType<{
    src: "ui32";
}>;
export const MediaImage: import("bitecs").ComponentType<{
    cacheKey: "ui32";
}>;
export const MediaVideo: import("bitecs").ComponentType<{
    autoPlay: "ui8";
}>;
export const AnimationMixer: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const NetworkedVideo: import("bitecs").ComponentType<{
    time: "f32";
    flags: "ui8";
}>;
export const VideoMenuItem: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const VideoMenu: import("bitecs").ComponentType<{
    videoRef: "eid";
    timeLabelRef: "eid";
    trackRef: "eid";
    headRef: "eid";
    playIndicatorRef: "eid";
    pauseIndicatorRef: "eid";
}>;
export const AudioEmitter: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const AudioSettingsChanged: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const Deletable: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const EnvironmentSettings: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const ObjectMenu: import("bitecs").ComponentType<{
    pinButtonRef: "eid";
    unpinButtonRef: "eid";
    cameraFocusButtonRef: "eid";
    cameraTrackButtonRef: "eid";
    removeButtonRef: "eid";
    dropButtonRef: "eid";
    inspectButtonRef: "eid";
    deserializeDrawingButtonRef: "eid";
    openLinkButtonRef: "eid";
    refreshButtonRef: "eid";
    cloneButtonRef: "eid";
    rotateButtonRef: "eid";
    mirrorButtonRef: "eid";
    scaleButtonRef: "eid";
    targetRef: "eid";
}>;
export const ObjectMenuTarget: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const NetworkDebug: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const NetworkDebugRef: import("bitecs").ComponentType<{
    ref: "eid";
}>;
export const Waypoint: import("bitecs").ComponentType<{
    flags: "ui8";
}>;
export const NetworkedWaypoint: import("bitecs").ComponentType<{
    occupied: "ui8";
}>;
export const WaypointPreview: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const Skybox: import("bitecs").ComponentType<import("bitecs").ISchema>;
export const ObjectSpawner: import("bitecs").ComponentType<{
    src: "ui32";
    flags: "ui8";
}>;

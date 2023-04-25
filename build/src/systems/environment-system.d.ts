export class EnvironmentSystem {
    constructor(sceneEl: any);
    scene: any;
    renderer: any;
    pmremGenerator: import("three").PMREMGenerator;
    setupDebugView(): void;
    debugGui: any;
    debugSettings: {
        toneMapping: string;
        outputEncoding: string;
        toneMappingExposure: number;
        physicallyCorrectLights: boolean;
        envMapTexture: any;
        skybox: any;
        backgroundTexture: any;
        backgroundColor: import("three").Color;
        fogType: any;
        fogColor: import("three").Color;
        fogDensity: number;
        fogFar: number;
        fogNear: number;
        enableHDRPipeline: boolean;
        enableBloom: boolean;
        bloom: {
            threshold: number;
            intensity: number;
            radius: number;
            smoothing: number;
        };
    };
    debugMode: boolean;
    debugUpdateUI: () => void;
    updateEnvironmentSettings(newSettings: any): void;
    updateEnvironment(envEl: any): void;
    applyEnvSettings(settings: any): void;
    prevEnvMapTextureUUID: any;
}

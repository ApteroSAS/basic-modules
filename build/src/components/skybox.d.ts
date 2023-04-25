declare const Sky_base: typeof import("three").Object3D;
export default class Sky extends Sky_base {
    static shader: {
        uniforms: any;
        vertexShader: string;
        fragmentShader: string;
    };
    static _geometry: import("three").BoxGeometry;
    constructor();
    sky: import("three").Mesh<import("three").BoxGeometry, import("three").ShaderMaterial>;
    _inclination: number;
    _azimuth: number;
    _distance: number;
    set turbidity(arg: any);
    get turbidity(): any;
    set rayleigh(arg: any);
    get rayleigh(): any;
    set luminance(arg: any);
    get luminance(): any;
    set mieCoefficient(arg: any);
    get mieCoefficient(): any;
    set mieDirectionalG(arg: any);
    get mieDirectionalG(): any;
    set inclination(arg: number);
    get inclination(): number;
    set azimuth(arg: number);
    get azimuth(): number;
    set distance(arg: number);
    get distance(): number;
    updateSunPosition(): void;
    generateEnvironmentMap(renderer: any): import("three").Texture;
    generateLightProbe(renderer: any): import("three").LightProbe;
    copy(source: any, recursive?: boolean): Sky;
}
export {};

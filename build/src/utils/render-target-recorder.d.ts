export function pixelsToPNG(pixels: any, width: any, height: any): Promise<File>;
export class RenderTargetRecorder {
    constructor(renderer: any, mimeType: any, captureWidth: any, captureHeight: any, fps: any, srcAudioTrack: any);
    renderer: any;
    videoRenderTarget: import("three").WebGLRenderTarget;
    videoContext: CanvasRenderingContext2D;
    videoImageData: ImageData;
    videoTrack: MediaStreamTrack;
    mediaRecorder: MediaRecorder;
    start(): void;
    chunks: any[];
    captureFrame(srcRenderTarget: any): void;
    save(): Promise<any>;
    cancel(): void;
}

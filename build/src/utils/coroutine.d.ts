export function crClearTimeout(handle: any): any;
export function crTimeout(fn: any, ms: any): number;
export function crInterval(fn: any, ms: any): number;
export function makeCancelable(fn: any, obj?: {}): {};
export function cancelable(iter: any, signal: any): Generator<any, {
    canceled: boolean;
    value?: undefined;
} | {
    value: any;
    canceled: boolean;
}, any>;
export function crNextFrame(): Promise<void>;
export function coroutine(iter: any): () => IteratorResult<any, any>;
export function crClearInterval(handle: any): any;

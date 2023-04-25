/**
 *
 * Gif parser by @gtk2k
 * https://github.com/gtk2k/gtk2k.github.io/tree/master/animation_gif
 *
 */
declare function parseGIF(gif: any): {
    delayTimes: number[];
    loopCnt: number;
    frames: string[];
    disposals: number[];
};

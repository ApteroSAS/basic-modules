export function spawnEmojiInFrontOfUser({ model, particleEmitterConfig }: {
    model: any;
    particleEmitterConfig: any;
}): void;
export const emojis: {
    model: string;
    particleEmitterConfig: {
        src: string;
        resolve: boolean;
        particleCount: number;
        startSize: number;
        endSize: number;
        sizeRandomness: number;
        lifetime: number;
        lifetimeRandomness: number;
        ageRandomness: number;
        startVelocity: {
            x: number;
            y: number;
            z: number;
        };
        endVelocity: {
            x: number;
            y: number;
            z: number;
        };
        startOpacity: number;
        middleOpacity: number;
        endOpacity: number;
    };
    id: string;
}[];

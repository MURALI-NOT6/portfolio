const clickSound = '/assets/sound/soundbg.wav';
const loadingSound = '/assets/sound/loadingsound.wav';
const homeBgSound = '/assets/sound/userinfo.wav';
const techSound = '/assets/sound/tech.wav';

// We need to be SSR safe
let clickAudio: HTMLAudioElement | null = null;
let loadingAudio: HTMLAudioElement | null = null;
let homeBgAudio: HTMLAudioElement | null = null;
let techAudio: HTMLAudioElement | null = null;

if (typeof window !== 'undefined') {
    clickAudio = new Audio(clickSound);
    loadingAudio = new Audio(loadingSound);
    homeBgAudio = new Audio(homeBgSound);
    techAudio = new Audio(techSound);

    // Pre-load sounds
    clickAudio.load();
    loadingAudio.load();
    homeBgAudio.load();
    techAudio.load();
}

export const playClickSound = () => {
    if (!clickAudio) return;
    // Clone node for click sounds to allow rapid successive plays
    const audio = clickAudio.cloneNode() as HTMLAudioElement;
    audio.play().catch(error => {
        console.warn('Click audio play failed:', error);
    });
};

export const playLoadingSound = () => {
    if (!loadingAudio) return { pause: () => {} } as HTMLAudioElement;
    loadingAudio.loop = true;
    loadingAudio.play().catch(error => {
        console.warn('Loading audio play failed:', error);
    });
    return loadingAudio; // Return to allow stopping it later
};

export const playHomeBackgroundSound = () => {
    if (!homeBgAudio) return { pause: () => {} } as HTMLAudioElement;
    homeBgAudio.loop = true;
    homeBgAudio.play().catch(error => {
        console.warn('Home background audio play failed:', error);
    });
    return homeBgAudio;
};

export const playTechSound = () => {
    if (!techAudio) return { pause: () => {} } as HTMLAudioElement;
    techAudio.play().catch(error => {
        console.warn('Tech sound play failed:', error);
    });
    return techAudio;
};

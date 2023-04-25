export function changeTheme(newThemeId: any): void;
export function applyThemeToTextButton(el: any, highlighted: any): void;
export function getCurrentTheme(): any;
export function getDefaultTheme(): any;
export function getThemeColor(name: any): any;
export function onThemeChanged(listener: any): () => void;
export function registerDarkModeQuery(changeListener: any): (MediaQueryList | {
    matches: boolean;
    addEventListener: () => void;
    removeEventListener: () => void;
} | (() => void))[];
export const themes: any;
export function tryGetTheme(themeId: any): any;

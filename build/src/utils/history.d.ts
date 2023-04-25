export function pushHistoryState(history: any, k: any, v: any, detail: any): void;
export function replaceHistoryState(history: any, k: any, v: any, detail: any): void;
export function pushHistoryPath(history: any, path: any, search: any): void;
export function clearHistoryState(history: any): void;
export function popToBeginningOfHubHistory(history: any, navigateToPriorPage: any): Promise<any>;
export function navigateToPriorPage(history: any): void;
export function sluglessPath(location: any): string;
export function withSlug(location: any, path: any): string;

export function formatMessageBody(body: any, { emojiClassName }?: {
    emojiClassName: any;
}): {
    formattedBody: JSX.Element;
    multiline: boolean;
    monospace: any;
    emoji: boolean;
};
export const MAX_MESSAGE_LENGTH: 750;

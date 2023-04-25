export function SpawnMessageButton(props: any): JSX.Element;
export function SendMessageButton(props: any): JSX.Element;
export function MessageAttachmentButton(props: any): JSX.Element;
export namespace MessageAttachmentButton {
    namespace propTypes {
        const disabled: PropTypes.Requireable<boolean>;
    }
}
export function ChatLengthWarning({ messageLength, maxLength }: {
    messageLength: any;
    maxLength: any;
}): JSX.Element;
export namespace ChatLengthWarning {
    export namespace propTypes_1 {
        const messageLength: PropTypes.Requireable<number>;
        const maxLength: PropTypes.Requireable<number>;
    }
    export { propTypes_1 as propTypes };
}
export function formatSystemMessage(entry: any, intl: any): any;
export function SystemMessage(props: any): JSX.Element;
export namespace SystemMessage {
    export namespace propTypes_2 {
        const timestamp: PropTypes.Requireable<any>;
        const showLineBreak: PropTypes.Requireable<boolean>;
    }
    export { propTypes_2 as propTypes };
}
export function ChatMessageGroup({ sent, sender, timestamp, messages }: {
    sent: any;
    sender: any;
    timestamp: any;
    messages: any;
}): JSX.Element;
export namespace ChatMessageGroup {
    export namespace propTypes_3 {
        export const sent: PropTypes.Requireable<boolean>;
        export const sender: PropTypes.Requireable<string>;
        const timestamp_1: PropTypes.Requireable<any>;
        export { timestamp_1 as timestamp };
        export const messages: PropTypes.Requireable<any[]>;
    }
    export { propTypes_3 as propTypes };
}
export function PermissionMessageGroup({ sent, timestamp, messages }: {
    sent: any;
    timestamp: any;
    messages: any;
}): JSX.Element;
export namespace PermissionMessageGroup {
    export namespace propTypes_4 {
        const sent_1: PropTypes.Requireable<boolean>;
        export { sent_1 as sent };
        const timestamp_2: PropTypes.Requireable<any>;
        export { timestamp_2 as timestamp };
        const messages_1: PropTypes.Requireable<any[]>;
        export { messages_1 as messages };
    }
    export { propTypes_4 as propTypes };
}
export function ChatSidebar({ onClose, userName, children, ...rest }: {
    [x: string]: any;
    onClose: any;
    userName: any;
    children: any;
}): JSX.Element;
export namespace ChatSidebar {
    export namespace propTypes_5 {
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
        const onScrollList: PropTypes.Requireable<(...args: any[]) => any>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const listRef: PropTypes.Requireable<(...args: any[]) => any>;
        const userName: PropTypes.Requireable<string>;
    }
    export { propTypes_5 as propTypes };
}
export function ChatToolbarButton(props: any): JSX.Element;
export const EmojiPickerPopoverButton: React.NamedExoticComponent<object>;
export const ChatInput: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
export namespace LogMessageType {
    const roomEntryRequired: string;
    const flyModeDisabled: string;
    const flyModeEnabled: string;
    const unauthorizedSceneChange: string;
    const invalidSceneUrl: string;
    const unauthorizedRoomRename: string;
    const captureUnavailable: string;
    const captureStopped: string;
    const captureStarted: string;
    const captureAlreadyStopped: string;
    const captureAlreadyRunning: string;
    const positionalAudioEnabled: string;
    const positionalAudioDisabled: string;
    const setAudioNormalizationFactor: string;
    const audioNormalizationDisabled: string;
    const audioNormalizationNaN: string;
    const invalidAudioNormalizationRange: string;
    const audioSuspended: string;
    const audioResumed: string;
    const joinFailed: string;
    const avatarChanged: string;
}
export const bubbletypes: string[];
export const ChatMessageList: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
import PropTypes from "prop-types";
import React from "react";

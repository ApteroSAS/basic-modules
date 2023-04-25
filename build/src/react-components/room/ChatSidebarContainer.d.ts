export function ChatContextProvider({ messageDispatch, children, people }: {
    messageDispatch: any;
    children: any;
    people: any;
}): JSX.Element;
export namespace ChatContextProvider {
    namespace propTypes {
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const messageDispatch: PropTypes.Requireable<object>;
        const presences: PropTypes.Requireable<object>;
        const sessionId: PropTypes.Requireable<string>;
        const people: PropTypes.Requireable<any[]>;
    }
}
export function ChatSidebarContainer({ scene, userId, userName, canSpawnMessages, presences, occupantCount, onClose, initialValue, autoFocus, toggleChatSidebar }: {
    scene: any;
    userId: any;
    userName: any;
    canSpawnMessages: any;
    presences: any;
    occupantCount: any;
    onClose: any;
    initialValue: any;
    autoFocus: any;
    toggleChatSidebar: any;
}): JSX.Element;
export namespace ChatSidebarContainer {
    export namespace propTypes_1 {
        export const canSpawnMessages: PropTypes.Requireable<boolean>;
        export const userId: PropTypes.Requireable<string>;
        export const userName: PropTypes.Requireable<string>;
        const presences_1: PropTypes.Validator<object>;
        export { presences_1 as presences };
        export const occupantCount: PropTypes.Validator<number>;
        export const scene: PropTypes.Validator<object>;
        export const onClose: PropTypes.Validator<(...args: any[]) => any>;
        export const autoFocus: PropTypes.Requireable<boolean>;
        export const initialValue: PropTypes.Requireable<string>;
        export const toggleChatSidebar: PropTypes.Validator<(...args: any[]) => any>;
    }
    export { propTypes_1 as propTypes };
}
export function ChatToolbarButtonContainer(props: any): JSX.Element;
export function cleanBulle_list(bulles_list: any, people: any): any[];
import PropTypes from "prop-types";

export function userFromPresence(sessionId: any, presence: any, micPresences: any, mySessionId: any, voiceEnabled: any): any;
export function usePeopleList(presences: any, mySessionId: any, micUpdateFrequency?: number): any[];
export function PeopleSidebarContainer({ hubChannel, presences, mySessionId, displayNameOverride, store, mediaSearchStore, performConditionalSignIn, onCloseDialog, showNonHistoriedDialog, onClose, toggleChatSidebar, signedIn }: {
    hubChannel: any;
    presences: any;
    mySessionId: any;
    displayNameOverride: any;
    store: any;
    mediaSearchStore: any;
    performConditionalSignIn: any;
    onCloseDialog: any;
    showNonHistoriedDialog: any;
    onClose: any;
    toggleChatSidebar: any;
    signedIn: any;
}): JSX.Element;
export namespace PeopleSidebarContainer {
    namespace propTypes {
        const displayNameOverride: PropTypes.Requireable<string>;
        const store: PropTypes.Validator<object>;
        const mediaSearchStore: PropTypes.Validator<object>;
        const hubChannel: PropTypes.Validator<object>;
        const history: PropTypes.Requireable<object>;
        const onClose: PropTypes.Validator<(...args: any[]) => any>;
        const mySessionId: PropTypes.Validator<string>;
        const presences: PropTypes.Validator<object>;
        const performConditionalSignIn: PropTypes.Validator<(...args: any[]) => any>;
        const onCloseDialog: PropTypes.Validator<(...args: any[]) => any>;
        const showNonHistoriedDialog: PropTypes.Validator<(...args: any[]) => any>;
        const toggleChatSidebar: PropTypes.Requireable<(...args: any[]) => any>;
        const signedIn: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
export function getSelectedPersonId(): any;
export function getSelectedPersonName(): any;
import PropTypes from "prop-types";

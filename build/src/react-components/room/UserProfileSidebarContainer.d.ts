export function UserProfileSidebarContainer({ mySessionId, user, hubChannel, presences, performConditionalSignIn, showBackButton, onBack, onClose, onCloseDialog, showNonHistoriedDialog, toggleChatSidebar, onSelectPerson, store, mediaSearchStore, signedIn }: {
    mySessionId: any;
    user: any;
    hubChannel: any;
    presences: any;
    performConditionalSignIn: any;
    showBackButton: any;
    onBack: any;
    onClose: any;
    onCloseDialog: any;
    showNonHistoriedDialog: any;
    toggleChatSidebar: any;
    onSelectPerson: any;
    store: any;
    mediaSearchStore: any;
    signedIn: any;
}): JSX.Element;
export namespace UserProfileSidebarContainer {
    namespace propTypes {
        const mySessionId: PropTypes.Requireable<string>;
        const user: any;
        const hubChannel: PropTypes.Requireable<object>;
        const presences: PropTypes.Requireable<object>;
        const performConditionalSignIn: PropTypes.Requireable<(...args: any[]) => any>;
        const showBackButton: PropTypes.Requireable<boolean>;
        const onBack: PropTypes.Requireable<(...args: any[]) => any>;
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
        const onCloseDialog: PropTypes.Requireable<(...args: any[]) => any>;
        const showNonHistoriedDialog: PropTypes.Requireable<(...args: any[]) => any>;
        const toggleChatSidebar: PropTypes.Requireable<(...args: any[]) => any>;
        const onSelectPerson: PropTypes.Requireable<(...args: any[]) => any>;
        const store: PropTypes.Requireable<object>;
        const mediaSearchStore: PropTypes.Requireable<object>;
        const signedIn: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";

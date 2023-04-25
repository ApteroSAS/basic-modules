export default class ProfileEntryPanel extends React.Component<any, any, any> {
    static propTypes: {
        containerType: PropTypes.Requireable<string>;
        displayNameOverride: PropTypes.Requireable<string>;
        store: PropTypes.Requireable<object>;
        mediaSearchStore: PropTypes.Requireable<object>;
        messages: PropTypes.Requireable<object>;
        finished: PropTypes.Requireable<(...args: any[]) => any>;
        history: PropTypes.Requireable<object>;
        avatarId: PropTypes.Requireable<string>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        onBack: PropTypes.Requireable<(...args: any[]) => any>;
        showBackButton: PropTypes.Requireable<boolean>;
        isSignedIn: PropTypes.Requireable<boolean>;
        signedIn: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        containerType: string;
    };
    constructor(props: any);
    state: {
        avatarId: any;
        displayName: any;
        companyName: any;
        jobTitleName: any;
        email: any;
        phoneNumber: any;
        descriptionUser: any;
        avatar: any;
    };
    scene: Element;
    getStateFromProfile: () => {
        displayName: any;
        avatarId: any;
        companyName: any;
        jobTitleName: any;
        email: any;
        phoneNumber: any;
        descriptionUser: any;
    };
    storeUpdated: () => void;
    saveStateAndFinish: (e: any) => void;
    updateUserDisplayName(displayName: any): Promise<void>;
    updateUserJobTitle(jobTitleName: any): Promise<void>;
    updateUserCompanyName(companyName: any): Promise<void>;
    updateUserPhoneNumber(phoneNumber: any): Promise<void>;
    getUserProfile(): Promise<void>;
    stopPropagation: (e: any) => void;
    setAvatarFromMediaResult: ({ detail: { entry, selectAction } }: {
        detail: {
            entry: any;
            selectAction: any;
        };
    }) => void;
    componentDidMount(): void;
    componentDidUpdate(_prevProps: any, prevState: any): void;
    componentWillUnmount(): void;
    refetchAvatar: () => Promise<void>;
    render(): JSX.Element;
    nameInput: any;
}
import React from "react";
import PropTypes from "prop-types";

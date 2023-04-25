export function AvatarSettingsContent({ displayName, companyName, jobTitle, email, phoneNumber, descriptionUser, displayNameInputRef, disableDisplayNameInput, onChangeDisplayName, onChangeCompanyName, onChangeJobTitle, onChangePhoneNumber, avatarPreview, displayNamePattern, onChangeAvatar, submit_info, isSignedIn, signedIn, containerType, ...rest }: {
    [x: string]: any;
    displayName: any;
    companyName: any;
    jobTitle: any;
    email: any;
    phoneNumber: any;
    descriptionUser: any;
    displayNameInputRef: any;
    disableDisplayNameInput: any;
    onChangeDisplayName: any;
    onChangeCompanyName: any;
    onChangeJobTitle: any;
    onChangePhoneNumber: any;
    avatarPreview: any;
    displayNamePattern: any;
    onChangeAvatar: any;
    submit_info: any;
    isSignedIn: any;
    signedIn: any;
    containerType: any;
}): JSX.Element;
export namespace AvatarSettingsContent {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const displayName: PropTypes.Requireable<string>;
        const companyName: PropTypes.Requireable<string>;
        const jobTitle: PropTypes.Requireable<string>;
        const email: PropTypes.Requireable<string>;
        const phoneNumber: PropTypes.Requireable<string>;
        const descriptionUser: PropTypes.Requireable<string>;
        const displayNameInputRef: PropTypes.Requireable<(...args: any[]) => any>;
        const disableDisplayNameInput: PropTypes.Requireable<boolean>;
        const displayNamePattern: PropTypes.Requireable<string>;
        const onChangeDisplayName: PropTypes.Requireable<(...args: any[]) => any>;
        const onChangeCompanyName: PropTypes.Requireable<(...args: any[]) => any>;
        const onChangeJobTitle: PropTypes.Requireable<(...args: any[]) => any>;
        const onChangePhoneNumber: PropTypes.Requireable<(...args: any[]) => any>;
        const avatarPreview: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const onChangeAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        const submit_info: PropTypes.Requireable<(...args: any[]) => any>;
        const isSignedIn: PropTypes.Requireable<boolean>;
        const signedIn: PropTypes.Requireable<(...args: any[]) => any>;
        const containerType: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";

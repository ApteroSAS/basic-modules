export function SubmitEmail({ onSubmitEmail, onSubmitEmailMicrosoftLogin, initialEmail, privacyUrl, termsUrl, message }: {
    onSubmitEmail: any;
    onSubmitEmailMicrosoftLogin: any;
    initialEmail: any;
    privacyUrl: any;
    termsUrl: any;
    message: any;
}): JSX.Element;
export namespace SubmitEmail {
    namespace defaultProps {
        const initialEmail: string;
    }
    namespace propTypes {
        export const message: PropTypes.Requireable<object>;
        export const termsUrl: PropTypes.Requireable<string>;
        export const privacyUrl: PropTypes.Requireable<string>;
        const initialEmail_1: PropTypes.Requireable<string>;
        export { initialEmail_1 as initialEmail };
        export const onSubmitEmail: PropTypes.Validator<(...args: any[]) => any>;
        export const onSubmitEmailMicrosoftLogin: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
export function WaitForVerification({ email, onCancel, showNewsletterSignup }: {
    email: any;
    onCancel: any;
    showNewsletterSignup: any;
}): JSX.Element;
export namespace WaitForVerification {
    export namespace propTypes_1 {
        const showNewsletterSignup: PropTypes.Requireable<boolean>;
        const email: PropTypes.Validator<string>;
        const onCancel: PropTypes.Validator<(...args: any[]) => any>;
    }
    export { propTypes_1 as propTypes };
}
export function WaitForMicrosoftVerification({ onCancel }: {
    onCancel: any;
}): JSX.Element;
export namespace WaitForMicrosoftVerification {
    export namespace propTypes_2 {
        const onCancel_1: PropTypes.Validator<(...args: any[]) => any>;
        export { onCancel_1 as onCancel };
    }
    export { propTypes_2 as propTypes };
}
export function SignInComplete({ message, onContinue }: {
    message: any;
    onContinue: any;
}): JSX.Element;
export namespace SignInComplete {
    export namespace propTypes_3 {
        const message_1: PropTypes.Requireable<string>;
        export { message_1 as message };
        export const onContinue: PropTypes.Validator<(...args: any[]) => any>;
    }
    export { propTypes_3 as propTypes };
}
export function SignInModal({ closeable, onClose, children, ...rest }: {
    [x: string]: any;
    closeable: any;
    onClose: any;
    children: any;
}): JSX.Element;
export namespace SignInModal {
    export namespace propTypes_4 {
        const closeable: PropTypes.Requireable<boolean>;
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
    export { propTypes_4 as propTypes };
}
export namespace SignInStep {
    const submit: string;
    const waitForVerification: string;
    const WaitForMicrosoftVerification: string;
    const complete: string;
}
export namespace SignInMessages {
    namespace pin {
        const id: string;
        const defaultMessage: string;
    }
    namespace unpin {
        const id_1: string;
        export { id_1 as id };
        const defaultMessage_1: string;
        export { defaultMessage_1 as defaultMessage };
    }
    namespace changeScene {
        const id_2: string;
        export { id_2 as id };
        const defaultMessage_2: string;
        export { defaultMessage_2 as defaultMessage };
    }
    namespace roomSettings {
        const id_3: string;
        export { id_3 as id };
        const defaultMessage_3: string;
        export { defaultMessage_3 as defaultMessage };
    }
    namespace closeRoom {
        const id_4: string;
        export { id_4 as id };
        const defaultMessage_4: string;
        export { defaultMessage_4 as defaultMessage };
    }
    namespace muteUser {
        const id_5: string;
        export { id_5 as id };
        const defaultMessage_5: string;
        export { defaultMessage_5 as defaultMessage };
    }
    namespace kickUser {
        const id_6: string;
        export { id_6 as id };
        const defaultMessage_6: string;
        export { defaultMessage_6 as defaultMessage };
    }
    namespace addOwner {
        const id_7: string;
        export { id_7 as id };
        const defaultMessage_7: string;
        export { defaultMessage_7 as defaultMessage };
    }
    namespace removeOwner {
        const id_8: string;
        export { id_8 as id };
        const defaultMessage_8: string;
        export { defaultMessage_8 as defaultMessage };
    }
    namespace createAvatar {
        const id_9: string;
        export { id_9 as id };
        const defaultMessage_9: string;
        export { defaultMessage_9 as defaultMessage };
    }
    namespace remixAvatar {
        const id_10: string;
        export { id_10 as id };
        const defaultMessage_10: string;
        export { defaultMessage_10 as defaultMessage };
    }
    namespace remixScene {
        const id_11: string;
        export { id_11 as id };
        const defaultMessage_11: string;
        export { defaultMessage_11 as defaultMessage };
    }
    namespace favoriteRoom {
        const id_12: string;
        export { id_12 as id };
        const defaultMessage_12: string;
        export { defaultMessage_12 as defaultMessage };
    }
    namespace favoriteRooms {
        const id_13: string;
        export { id_13 as id };
        const defaultMessage_13: string;
        export { defaultMessage_13 as defaultMessage };
    }
    namespace tweet {
        const id_14: string;
        export { id_14 as id };
        const defaultMessage_14: string;
        export { defaultMessage_14 as defaultMessage };
    }
}
import PropTypes from "prop-types";

export function permissionMessage({ permission, status, isMod }: {
    permission: any;
    status: any;
    isMod?: boolean;
}, intl: any): JSX.Element;
export function PermissionNotification({ permission, className, isMod }: {
    permission: any;
    className: any;
    isMod: any;
}): JSX.Element;
export namespace PermissionNotification {
    namespace propTypes {
        const permission: PropTypes.Requireable<string>;
        const className: PropTypes.Requireable<string>;
        const isMod: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const isMod_1: boolean;
        export { isMod_1 as isMod };
    }
}
export namespace permissionsIcons {
    const voiceChatEnabled: JSX.Element;
    const voiceChatDisabled: JSX.Element;
    const voiceChatDisabledMod: JSX.Element;
    const textChatEnabled: JSX.Element;
    const textChatDisabled: JSX.Element;
    const textChatDisabledMod: JSX.Element;
}
export namespace permissionsMessages {
    export namespace voiceChatEnabled_1 {
        const id: string;
        const defaultMessage: string;
    }
    export { voiceChatEnabled_1 as voiceChatEnabled };
    export namespace voiceChatDisabled_1 {
        const id_1: string;
        export { id_1 as id };
        const defaultMessage_1: string;
        export { defaultMessage_1 as defaultMessage };
    }
    export { voiceChatDisabled_1 as voiceChatDisabled };
    export namespace voiceChatDisabledMod_1 {
        const id_2: string;
        export { id_2 as id };
        const defaultMessage_2: string;
        export { defaultMessage_2 as defaultMessage };
    }
    export { voiceChatDisabledMod_1 as voiceChatDisabledMod };
    export namespace textChatEnabled_1 {
        const id_3: string;
        export { id_3 as id };
        const defaultMessage_3: string;
        export { defaultMessage_3 as defaultMessage };
    }
    export { textChatEnabled_1 as textChatEnabled };
    export namespace textChatDisabled_1 {
        const id_4: string;
        export { id_4 as id };
        const defaultMessage_4: string;
        export { defaultMessage_4 as defaultMessage };
    }
    export { textChatDisabled_1 as textChatDisabled };
    export namespace textChatDisabledMod_1 {
        const id_5: string;
        export { id_5 as id };
        const defaultMessage_5: string;
        export { defaultMessage_5 as defaultMessage };
    }
    export { textChatDisabledMod_1 as textChatDisabledMod };
}
import PropTypes from "prop-types";

export function AvatarSettingsSidebar({ className, showBackButton, onBack, onClose, ...rest }: {
    [x: string]: any;
    className: any;
    showBackButton: any;
    onBack: any;
    onClose: any;
}): JSX.Element;
export namespace AvatarSettingsSidebar {
    namespace propTypes {
        const showBackButton: PropTypes.Requireable<boolean>;
        const className: PropTypes.Requireable<string>;
        const onBack: PropTypes.Requireable<(...args: any[]) => any>;
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";

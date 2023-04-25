export function PromoteClientModal({ onClose, onConfirm, displayName }: {
    onClose: any;
    onConfirm: any;
    displayName: any;
}): JSX.Element;
export namespace PromoteClientModal {
    namespace propTypes {
        const displayName: PropTypes.Validator<string>;
        const onConfirm: PropTypes.Requireable<(...args: any[]) => any>;
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";

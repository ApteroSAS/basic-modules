export function fallbackVMButton(): JSX.Element;
export function fallbackTCPButton(): JSX.Element;
export function comboFallbackButton(): JSX.Element;
export function FallbackModal({ className, onEnterRoom, onBack, ...rest }: {
    [x: string]: any;
    className: any;
    onEnterRoom: any;
    onBack: any;
}): JSX.Element;
export namespace FallbackModal {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const onEnterRoom: PropTypes.Requireable<(...args: any[]) => any>;
        const onBack: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";

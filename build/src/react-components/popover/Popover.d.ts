export function Popover({ content: Content, children, title, showHeader, placement, offsetSkidding, offsetDistance, initiallyVisible, disableFullscreen, isVisible, onChangeVisible, popoverApiRef, popoverClass, arrowClass }: {
    content: any;
    children: any;
    title: any;
    showHeader: any;
    placement: any;
    offsetSkidding: any;
    offsetDistance: any;
    initiallyVisible: any;
    disableFullscreen: any;
    isVisible: any;
    onChangeVisible: any;
    popoverApiRef: any;
    popoverClass: any;
    arrowClass: any;
}): JSX.Element;
export namespace Popover {
    namespace propTypes {
        const initiallyVisible: PropTypes.Requireable<boolean>;
        const placement: PropTypes.Requireable<string>;
        const title: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        const children: PropTypes.Validator<(...args: any[]) => any>;
        const content: PropTypes.Requireable<NonNullable<((...args: any[]) => any) | PropTypes.ReactNodeLike>>;
        const disableFullscreen: PropTypes.Requireable<boolean>;
        const popoverApiRef: PropTypes.Requireable<object>;
        const popoverClass: PropTypes.Requireable<string>;
        const showHeader: PropTypes.Requireable<boolean>;
        const offsetSkidding: PropTypes.Requireable<number>;
        const offsetDistance: PropTypes.Requireable<number>;
        const isVisible: PropTypes.Requireable<boolean>;
        const onChangeVisible: PropTypes.Requireable<(...args: any[]) => any>;
        const arrowClass: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const initiallyVisible_1: boolean;
        export { initiallyVisible_1 as initiallyVisible };
        const placement_1: string;
        export { placement_1 as placement };
        const offsetSkidding_1: number;
        export { offsetSkidding_1 as offsetSkidding };
        const offsetDistance_1: number;
        export { offsetDistance_1 as offsetDistance };
        const showHeader_1: boolean;
        export { showHeader_1 as showHeader };
    }
}
import PropTypes from "prop-types";

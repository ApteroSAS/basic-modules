export function Sidebar({ title, beforeTitle, afterTitle, children, contentClassName, className, disableOverflowScroll }: {
    title: any;
    beforeTitle: any;
    afterTitle: any;
    children: any;
    contentClassName: any;
    className: any;
    disableOverflowScroll: any;
}): JSX.Element;
export namespace Sidebar {
    namespace propTypes {
        const title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const beforeTitle: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const afterTitle: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const className: PropTypes.Requireable<string>;
        const contentClassName: PropTypes.Requireable<string>;
        const disableOverflowScroll: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const disableOverflowScroll_1: boolean;
        export { disableOverflowScroll_1 as disableOverflowScroll };
    }
}
import PropTypes from "prop-types";

export function Modal({ title, titleNode, beforeTitle, afterTitle, children, contentClassName, className, disableFullscreen }: {
    title: any;
    titleNode: any;
    beforeTitle: any;
    afterTitle: any;
    children: any;
    contentClassName: any;
    className: any;
    disableFullscreen: any;
}): JSX.Element;
export namespace Modal {
    namespace propTypes {
        const title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const titleNode: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const beforeTitle: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const afterTitle: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const className: PropTypes.Requireable<string>;
        const contentClassName: PropTypes.Requireable<string>;
        const disableFullscreen: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";

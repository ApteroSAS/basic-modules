export function ListItem({ className, children, ...rest }: {
    [x: string]: any;
    className: any;
    children: any;
}): JSX.Element;
export namespace ListItem {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
export function ButtonListItem({ className, children, ...rest }: {
    [x: string]: any;
    className: any;
    children: any;
}): JSX.Element;
export namespace ButtonListItem {
    export namespace propTypes_1 {
        const className_1: PropTypes.Requireable<string>;
        export { className_1 as className };
        const children_1: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export { children_1 as children };
    }
    export { propTypes_1 as propTypes };
}
export const List: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
import PropTypes from "prop-types";
import React from "react";

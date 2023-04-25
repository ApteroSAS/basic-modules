export function CreatePropsFromData(data: any): any;
export function Prop({ propKey, propValue }: {
    propKey: any;
    propValue: any;
}): JSX.Element;
export namespace Prop {
    namespace propTypes {
        const propKey: PropTypes.Requireable<string>;
        const propValue: PropTypes.Requireable<any>;
    }
}
import PropTypes from "prop-types";

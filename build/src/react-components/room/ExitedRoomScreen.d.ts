export function ExitedRoomScreen({ reason, showTerms, termsUrl, showSourceLink }: {
    reason: any;
    showTerms: any;
    termsUrl: any;
    showSourceLink: any;
}): JSX.Element;
export namespace ExitedRoomScreen {
    namespace propTypes {
        const reason: PropTypes.Validator<string>;
        const showTerms: PropTypes.Requireable<boolean>;
        const termsUrl: PropTypes.Requireable<string>;
        const showSourceLink: PropTypes.Requireable<boolean>;
    }
}
export namespace ExitReason {
    const exited: string;
    const closed: string;
    const denied: string;
    const disconnected: string;
    const left: string;
    const full: string;
    const sceneError: string;
    const connectError: string;
    const versionMismatch: string;
}
import PropTypes from "prop-types";

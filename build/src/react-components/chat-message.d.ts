export function createInWorldLogMessage({ name, type, body }: {
    name: any;
    type: any;
    body: any;
}): Promise<void>;
export function spawnChatMessage(body: any, from: any): Promise<void>;
declare function ChatMessage(props: any): JSX.Element;
declare namespace ChatMessage {
    namespace propTypes {
        const name: PropTypes.Requireable<string>;
        const maySpawn: PropTypes.Requireable<boolean>;
        const body: PropTypes.Requireable<string>;
        const sessionId: PropTypes.Requireable<string>;
        const className: PropTypes.Requireable<string>;
        const onViewProfile: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
export default ChatMessage;
import PropTypes from "prop-types";

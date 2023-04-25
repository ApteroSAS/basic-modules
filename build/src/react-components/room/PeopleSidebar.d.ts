export function PeopleSidebar({ people, onSelectPerson, onClose, showMuteAll, onMuteAll, canVoiceChat, voiceChatEnabled, isMod }: {
    people: any;
    onSelectPerson: any;
    onClose: any;
    showMuteAll: any;
    onMuteAll: any;
    canVoiceChat: any;
    voiceChatEnabled: any;
    isMod: any;
}): JSX.Element;
export namespace PeopleSidebar {
    namespace propTypes {
        const people: PropTypes.Requireable<any[]>;
        const onSelectPerson: PropTypes.Requireable<(...args: any[]) => any>;
        const showMuteAll: PropTypes.Requireable<boolean>;
        const onMuteAll: PropTypes.Requireable<(...args: any[]) => any>;
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
        const canVoiceChat: PropTypes.Requireable<boolean>;
        const voiceChatEnabled: PropTypes.Requireable<boolean>;
        const isMod: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const people_1: any[];
        export { people_1 as people };
        export function onSelectPerson_1(): void;
        export { onSelectPerson_1 as onSelectPerson };
        const isMod_1: boolean;
        export { isMod_1 as isMod };
    }
}
import PropTypes from "prop-types";

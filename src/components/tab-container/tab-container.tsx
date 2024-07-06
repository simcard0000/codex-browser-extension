import HistoryTab from './history-tab/history-tab';
import CreateTab from './create-tab/create-tab';
import SettingsTab from './settings-tab/settings-tab';

interface TabContainerProps {
    type: string;
}

const TabContainer = (props: TabContainerProps) => {
    return (
        <>
            {props.type === "history" && <HistoryTab />}
            {props.type === "create" && <CreateTab />}
            {props.type === "settings" && <SettingsTab />}
        </>
    );
}

export default TabContainer;
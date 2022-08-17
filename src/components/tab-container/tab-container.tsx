import React from 'react';

import HistoryTab from '../tab-container/history-tab/history-tab';
import CreateTab from '../tab-container/create-tab/create-tab';
import SettingsTab from '../tab-container/settings-tab/settings-tab';

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
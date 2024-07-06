
import './settings-tab.css';

const SettingsTab = () => {
    return (
        <div id="historyTabContainer">
            <fieldset>
                <legend>&nbsp;Set dark mode:&nbsp;</legend>
                <input type="radio" id="enableDarkMode" name="darkMode" value="enableDarkMode"/>
                    <label htmlFor="enableDarkMode">Enable</label>
                <input type="radio" id="disableDarkMode" name="darkMode" value="disableDarkMode"/>
                    <label htmlFor="disableDarkMode">Disable</label>
                <input type="radio" id="followDefaultDarkMode" name="darkMode" value="followDefaultDarkMode"/>
                    <label htmlFor="followDefaultDarkMode">Follow system default</label>
            </fieldset>
            <fieldset>
                <legend>&nbsp;Manage services:&nbsp;</legend>
                <button className="manageServicesButton">Log into Are.na</button>
                <button className="manageServicesButton">Log into Pinterest</button>
                <button className="manageServicesButton">Log into Notion</button>
                {/* Use Zotero API for generating citations */}
            </fieldset>
            <fieldset>
                <legend>&nbsp;Service statuses:&nbsp;</legend>
                <label>Are.na</label>
                <br></br>
                <label>Pinterest</label>
                <br></br>
                <label><a href="https://status.notion.so/">Notion</a></label>
                <br></br>
                <label>ZoteroBib</label>
            </fieldset>
            <fieldset>
                <legend>&nbsp;Other:&nbsp;</legend>
                <button className="otherButton">Delete history</button>
                <button className="otherButton">API privacy policies</button>
                <button className="otherButton">Uninstall Codex</button>
            </fieldset>
        </div>
    )
};

export default SettingsTab;
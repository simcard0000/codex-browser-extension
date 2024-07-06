
import { useState } from 'react';

import TabContainer from '../tab-container/tab-container';

import './menu-bar.css';

const MenuBar = () => {
	const [type, setType] = useState("settings");
    return (
		<>
			<div id="menuBarContainer">
				<div id="titleSection">
					<h1 id="titleIcon">❃</h1>
					<h1>&nbsp;Codex&nbsp;</h1>
				</div>
				{/* Link to GitHub project */}
				<p><a href="//www.github.com">version 1.0</a> |</p>
				<p>&nbsp;<button className="menuBarButton" onClick={() => setType("history")} style={type === "history" ? {textDecoration: "underline solid black"} : {}}>history</button> |</p>
				<p>&nbsp;<button className="menuBarButton" onClick={() => setType("create")} style={type === "create" ? {textDecoration: "underline solid black"} : {}}>create</button> |</p>
				<p>&nbsp;<button className="menuBarButton" onClick={() => setType("settings")} style={type === "settings" ? {textDecoration: "underline solid black"} : {}}>settings</button></p>
			</div>
			<TabContainer type={type}/>
		</>
    );
};

export default MenuBar;
import "./sidebar.css";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="menu-icons">
				<a href="/" className="menu-icon">
					<img src="/general/logo.png" alt="Sidebar Logo" className="logo" />
				</a>
				<a href="/" className="menu-icon">
					<img src="/general/home.svg" alt="Home icon" />
				</a>
				<a href="/" className="menu-icon">
					<img src="/general/create.svg" alt="Create icon" />
				</a>
				<a href="/" className="menu-icon">
					<img src="/general/updates.svg" alt="Update icon" />
				</a>
				<a href="/" className="menu-icon">
					<img src="/general/messages.svg" alt="Messages icon" />
				</a>
			</div>
			<a href="/" className="menu-icon">
				<img src="/general/settings.svg" alt="Settings icon" />
			</a>
		</div>
	);
}

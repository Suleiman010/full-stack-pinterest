import "./header.css";

import UserButton from "../userButton/UserButton";

export default function Header() {
	return (
		<div className="header">
			{/* Search */}
			<div className="search">
				<img src="/general/search.svg" alt="search-icon" />
				<input type="text" placeholder="Search" />
			</div>
			{/* User */}
			<UserButton />
		</div>
	);
}

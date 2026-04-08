import { useState } from "react";

import "./userButton.css";

export default function UserButton() {
	const [openMenu, setOpenMenu] = useState(false);
	const currentUser = true;

	return currentUser ? (
		<div className="user-button">
			<img src="/general/noAvatar.png" alt="User image" />
			<img
				src="/general/arrow.svg"
				alt="Menu arrow image"
				className="arrow"
				onClick={() => setOpenMenu((prev) => !prev)}
			/>
			{openMenu && (
				<div className="user-options">
					<div className="user-option">Profile</div>
					<div className="user-option">Setting</div>
					<div className="user-option">Logout</div>
				</div>
			)}
		</div>
	) : (
		<a href="/" className="login-link">
			Login / Sign-up
		</a>
	);
}

import "./app.css";

import Gallery from "./components/gallery/gallery";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/sidebar";

const App = () => {
	return (
		<div className="app">
			<Sidebar />
			<div className="content">
				<Header />
				<Gallery />
			</div>
		</div>
	);
};

export default App;

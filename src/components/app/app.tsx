/** @format */

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Heading from '../heading/heading';
import RemindersComposed from '../reminders/RemindersComposition';

function App() {
	return (
		<div className='generalCuteContainer'>
			<Heading />
			<RemindersComposed />
		</div>
	);
}

export default App;


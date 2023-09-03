/** @format */

import { MdDoneOutline } from 'react-icons/md';
import Reminder from '../interfaces/reminder';
interface reminderListProps {
	reminders: Reminder[];
	onRmReminder: (id: number) => void;
}
const id: number = Math.random();
const ReminderList = ({ reminders, onRmReminder }: reminderListProps) => {
	return (
		<ul className='list-group'>
			{reminders.map((reminder) => (
				<li
					className='cute-item-list list-group-item '
					key={id}>
					<div>
						<span>{reminder.title}</span>

						<button
							className='cuteBtn btn  rounded-pill  '
							onClick={() => onRmReminder(reminder.id)}>
							<MdDoneOutline />
						</button>
					</div>
				</li>
			))}
		</ul>
	);
};

export default ReminderList;


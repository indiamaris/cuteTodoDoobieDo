/** @format */

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReminderService from '../../services/remindersbacken';
import ReminderList from './reminderList';
import Reminder from '../interfaces/reminder';
import NewReminder from './newReminder';

function RemindersComposed() {
	const [reminders, setReminders] = useState<Reminder[]>([]);
	const loadReminders = async () => {
		const reminders = await ReminderService.getReminders();
		setReminders(reminders);
	};

	const rmReminder = (id: number) => {
		setReminders(reminders.filter((reminder) => reminder.id !== id));
	};

	const addReminder = async (title: string) => {
		const newReminder = await ReminderService.addReminder(title);
		setReminders([newReminder, ...reminders]);
	};

	useEffect(() => {
		loadReminders();
	}, []);

	return (
		<div className='generalCuteContainer d-flex justify-content-around'>
			<div className='my-4'>
				<NewReminder onAddReminder={addReminder} />
			</div>
			<div className='cuteRemindersBox p-2'>
				<ReminderList
					reminders={reminders}
					onRmReminder={rmReminder}
				/>
			</div>
		</div>
	);
}

export default RemindersComposed;


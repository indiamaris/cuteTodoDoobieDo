/** @format */

import React, { useState } from 'react';

interface NewReminderProps {
	onAddReminder: (title: string) => void;
}
export default function NewReminder({
	onAddReminder,
}: NewReminderProps): JSX.Element {
	const [title, setTitle] = useState('');
	const submitForm = (e: React.FormEvent) => {
		e.preventDefault();
		if (!title) return;
		onAddReminder(title);
		setTitle('');
	};

	return (
		<form onSubmit={submitForm}>
			<div
				className='d-inline-flex align-items-center 
		'>
				<div className='d-flex'>
					<label htmlFor='title'> </label>

					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						id='title'
						type='text'
						className='form-control cuteForm me-2'
					/>
				</div>
				<div className='d-flex'>
					<button
						type='submit'
						className=' button btn btn-m  addBtnCute '>
						+
					</button>
				</div>
			</div>
		</form>
	);
}


import React, { useState } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Text } from '@quarkly/widgets';
const Form = atomize.form();

const NetlifyForm = ({
	children,
	formName,
	successMessage,
	errorMessage,
	...props
}) => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		const form = event.target;
		const button = form.querySelector('[type="submit"]');
		button?.setAttribute('disabled', true);
		fetch('/', {
			method: 'POST',
			headers: {
				'Content-Type': 'multipart/form-data'
			},
			body: new URLSearchParams(new FormData(form)).toString()
		}).then(response => {
			if (response.status !== 200) throw Error;
			setSuccess(true);
		}).catch(() => {
			setError(true);
		}).finally(() => {
			button?.removeAttribute('disabled');
		});
	};

	return <Box {...props}>
		    
		{!success ? <Form data-netlify="true" name={formName} onSubmit={handleSubmit}>
			      
			<input type="hidden" name="form-name" value={formName} />
			      
			{children}
			      
			{error && <Text color="--red">
				{errorMessage}
			</Text>}
			    
		</Form> : <Text>
			{successMessage}
		</Text>}
		  
	</Box>;
};

const propInfo = {
	formName: {
		title: {
			en: 'Form name',
			ru: 'Название формы'
		},
		category: 'Main',
		control: 'input'
	},
	successMessage: {
		title: {
			en: 'Success message',
			ru: 'Сообщение об успехе'
		},
		category: 'Main',
		control: 'input',
		weight: 1
	},
	errorMessage: {
		title: {
			en: 'Error message',
			ru: 'Сообщение в случае ошибки'
		},
		category: 'Main',
		control: 'input',
		weight: 1
	}
};
const defaultProps = {
	formName: 'my-form',
	successMessage: 'Success',
	errorMessage: 'Something went wrong',
	padding: 10
};
export default Object.assign(NetlifyForm, {
	title: 'NetlifyForm',
	description: {
		ru: 'Компонент для создания Netlify формы'
	},
	propInfo,
	defaultProps
});
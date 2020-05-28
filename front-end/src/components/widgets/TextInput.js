import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';

function TextInput(props) {
	const {label, name, placeholder, register, invalid, ...rest} = props;

	const bool = !!invalid ? true : false;
	return (
		<FormGroup>
			<Label htmlFor={name}>{label}</Label>
			<Input
				type="text"
				id={name}
				name={name}
				innerRef={register({
					required: 'Required',
				})}
				invalid={bool}
				placeholder={placeholder}
				{...rest}
			/>
		</FormGroup>
	);
}

export default TextInput;

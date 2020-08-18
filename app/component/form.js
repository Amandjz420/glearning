import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import * as React from 'react';

export default function Form (props) {

	const [value, setValue] = React.useState('');
	const [error, setError] = React.useState('');
	React.useEffect(() => {
		if(props.validator){
			if(props.validator(value)) {
				setError('')
			} else {
				setError("Invalid format, please no special characters or number or space")
			}
		}
	}, [value])

	const submitForm = () => {
		if(value && !error) {
			props.onSubmit(value);
			setValue('');
		}
	}

	return (
		<View style={{
			backgroundColor: "#ffffff",
			flex: 1,
			padding: 10,
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center'
		}}>
			<View
				style={{
					flex: 1,
					borderRadius: 10,
					backgroundColor: "#d8d8d8",
					width: '100%',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<Text>{props.label}</Text>
				<TextInput
					style={{
						width: 200,
						height: 40,
						backgroundColor: '#ffffff',
						marginTop:30,
						paddingHorizontal: 10
					}}
					autoCapitalize={'words'}
					blurOnSubmit={true}
					maxLength={40}
					placeholder={'Enter Name'}
					onChangeText={(value) => setValue(value)}
					value={value}/>
				{!!error &&
					<Text style={{color: 'red', textAlign: 'center'}}>
						{error}
					</Text>
				}
				{!error &&
					<TouchableOpacity
						style={{
							backgroundColor: '#fe6100',
							padding: 5,
							marginTop:30,
							paddingHorizontal: 10,
							borderRadius: 15,
						}}
						onPress={submitForm}>
						<Text> Submit </Text>
					</TouchableOpacity>
				}
			</View>
		</View>
	);
}

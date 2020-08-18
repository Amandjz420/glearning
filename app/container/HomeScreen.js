import {KeyboardAvoidingView, SafeAreaView, ScrollView} from 'react-native';
import * as React from 'react';
import Form from '../component/form'
import {addFromList} from '../redux/action/appActions'
import { useDispatch } from "react-redux";


export default function NameScreen() {

	const dispatch = useDispatch();

	const validator = (text) => {
		return /^[a-zA-z]*$/g.test(text)
	}

	return (
		<SafeAreaView style={{flex: 1,}}>
			<KeyboardAvoidingView style={{flex: 1, justifyContent: 'center',}} behavior="padding" enabled>
				<ScrollView
					contentContainerStyle={{
						flex: 1
					}}
					style={{flex: 1}}>
					<Form
						validator={validator}
						onSubmit={(text) => {
							dispatch(addFromList(text, 'name'));
						}}
						label={'Enter the Name of your close friend'}></Form>
					<Form
						validator={validator}
						onSubmit={(text) => {
							dispatch(addFromList(text, 'animals'))
						}}
						label={"Enter the Animal you want as a pet"}></Form>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

import {SafeAreaView, FlatList, Text, View, TouchableOpacity} from 'react-native';
import * as React from 'react';
import {removeFromList} from '../redux/action/appActions'
import { useSelector, useDispatch } from "react-redux";


export default function NameScreen() {
	const names = useSelector(state => state.appReducer.names);
	const dispatch = useDispatch();
	return (
		<SafeAreaView style={{ flex: 1,backgroundColor: '#ffffff'}}>
			<Text
				style={{
					width: '100%',
					textAlign: 'left',
					fontWeight: '600',
					paddingLeft:30,
					paddingTop:10,
					marginVertical: 20,
					fontSize: 20,
					height: 40,
				}}>
				Friends
			</Text>
			<FlatList
				data={names}
				extraData={names}
				style={{flex: 1}}
				renderItem={({item}) => {
					return (
						<View style={{
							paddingVertical: 14,
							backgroundColor: '#f2f2f2',
							borderBottomWidth: .5,
							flexDirection: 'row',
							paddingLeft: 30,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
							<Text style={{fontSize: 18, flex: 1}}>{item}</Text>
							<TouchableOpacity
								onPress={() => {
									dispatch(removeFromList(item, 'names'))
								}}
								style={{
									backgroundColor: '#ffffff',
									marginRight: 20,
									padding: 15,
									borderRadius: 25
								}}>
								<Text style={{fontSize: 12}}>{'X'}</Text>
							</TouchableOpacity>
						</View>
					)
				}}
				keyExtractor={(item, index) => 'name-' + index}/>
		</SafeAreaView>
	);
}

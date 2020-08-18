import {SafeAreaView, FlatList, Text, View, TouchableOpacity} from 'react-native';
import * as React from 'react';
import {removeFromList} from '../redux/action/appActions'
import { useSelector, useDispatch } from "react-redux";


export default function AnimalScreen() {
	const animals = useSelector(state => state.appReducer.animals);
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
				Future Possible Pet
			</Text>
			<FlatList
				data={animals}
				extraData={animals}
				style={{flex: 1}}
				renderItem={({item}) => {
					return (
						<View style={{
							paddingVertical: 14,
							backgroundColor: '#f2f2f2',
							borderBottomWidth: .5,
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							paddingLeft: 30
						}}>
							<Text style={{fontSize: 18, flex: 1}}>{item}</Text>
							<TouchableOpacity
								onPress={() => {
									dispatch(removeFromList(item, 'animals'))
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
				keyExtractor={(item, index) => 'animal-' + index}/>
		</SafeAreaView>
	);
}

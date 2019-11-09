import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Thumbnail, Icon } from 'native-base';

const LightComponent = ({icon, name, onPress}) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[styles.card]}>
				<Icon name={icon} type='Ionicons' style={{fontSize: 35}} />
				<Text style={styles.deviceName}>{name}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#ddd',
		backgroundColor: '#fff',
		marginVertical: 10,
		padding: 20,
		width: 150,
		height: 150,
		justifyContent: 'space-between'
	},
	deviceName: {
		fontFamily: 'Product_Bold',
		fontSize: 14,
	}
});

export default LightComponent;

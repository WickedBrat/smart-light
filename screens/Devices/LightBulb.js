import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import Slider from 'react-native-material-slider';


const LightBulb = ({navigation}) => {
	const device = {active: true};
	const [active, setActive] = useState(true)
	return (
		<View style={styles.container}>
			<View style={{ margin: 20, marginTop: 50, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
				<Icon name='list' type='Ionicons' />
				<Icon name='arrow-round-back' type='Ionicons' onPress={() => navigation.pop()} />
			</View>
			<View>
				<Icon
					name='bulb'
					type='Ionicons'
					style={{fontSize: 200, textAlign: 'center', color: active ? 'black' : '#777'}}
					onPress={() => {setActive(!active)}}
				/>
				<Text style={{ fontFamily: 'Product_Regular', fontSize: 15, textAlign: 'center'}}>Tap on the bulb to switch on or off.</Text>
			</View>
			<View>
				<Slider
					style={{width: 200, height: 40}}
					minimumValue={0}
					value={68}
					maximumValue={100}
					minimumTrackTintColor="#FFFFFF"
					maximumTrackTintColor="#000000"
				/>
			</View>
		</View>
	);
};


LightBulb.navigationOptions = {
    header: null,
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
    },
  });
  
export default LightBulb;

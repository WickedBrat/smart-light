import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Thumbnail, Icon } from 'native-base';
import LightComponent from '../components/LightComponent';


export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{ margin: 20, marginTop: 50, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
        <Icon name='list' type='Ionicons' />
        <Thumbnail source={{uri: 'https://image.flaticon.com/icons/png/512/17/17004.png'}} small />
      </View>
      <ScrollView>
        <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
        <Text style={{fontFamily: 'Product_Regular', fontSize: 30, color: '#777'}}>Welcome,</Text>
        <Text style={{fontFamily: 'Product_Bold', fontSize: 30}}> Amritansh</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
          <LightComponent icon={'bulb'} name='Lights' onPress={() => navigation.navigate('Device', {deviceType: 'bulb', deviceTypeName: 'Lights'})}/>
          <LightComponent icon={'medical'} name='Fans' onPress={() => navigation.navigate('Device', {deviceType: 'medical', deviceTypeName: 'Fans'})} />
          <LightComponent icon={'add-circle'} name='Add new device' onPress={() => navigation.navigate('AddNewDevice')} />
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Thumbnail } from 'native-base';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Device = ({navigation}) => {
    const deviceIcon = navigation.getParam('deviceType');
    const deviceName = navigation.getParam('deviceTypeName');
    return (
    <View style={styles.container}>
        <View style={{ margin: 20, marginTop: 50, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
            <Icon name='list' type='Ionicons' />
            <Icon name='arrow-round-back' type='Ionicons' onPress={() => navigation.pop()} />
        </View>
        <ScrollView>
            <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center' }}>
                <Text style={{fontFamily: 'Product_Regular', fontSize: 30, color: '#777', marginRight: 20}}>
                    <Icon name={deviceIcon} type='Ionicons' />
                </Text>
                <Text style={{fontFamily: 'Product_Bold', fontSize: 30}}>{deviceName}</Text>
            </View>
            <View style={{marginHorizontal: 20}}>
                <TouchableOpacity onPress={() => navigation.navigate('LightBulb')}>
                    <View style={styles.list}>
                        <Icon name='git-commit' type='Ionicons' style={{marginRight: 10}} />
                        <Text style={{fontFamily: 'Product_Regular', fontSize: 18}}>Living Room Light</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
    );
};

Device.navigationOptions = {
    header: null,
  };
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginTop: 20,
        backgroundColor: 'white'
    }
  });
  
export default Device;

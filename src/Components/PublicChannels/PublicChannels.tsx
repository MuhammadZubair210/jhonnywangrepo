import {Image} from 'native-base';
import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNavigation from '../../navigation/TabNavigation';

const {width, height} = Dimensions.get('screen');

export interface Props {
  navigation: any;
}

const PublicChannels: React.FC<Props> = ({...props}) => {
  return (
    <SafeAreaView style={{height: height, width: width}}>
      <View style={{width: width}}>
        <View style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
          <View
            style={{
              width: '20%',
              padding: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <FastImage
              source={require('../../assets/img5.png')}
              style={styles.profileImg}
              resizeMode={'cover'}
            />
            <Text style={{marginTop: 5}}>Public</Text>
          </View>
          <View style={{width: '80%'}}>
            <View style={{backgroundColor: '#fff', width: '95%'}}>
              <View
                style={{
                  backgroundColor: '#264D7D',
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 12,
                  }}>
                  <View>
                    <Text
                      style={{color: '#fff', fontSize: 15, fontWeight: '700'}}>
                      Public channel
                    </Text>
                    <Text style={{color: '#fff', fontSize: 11}}>
                      7 Channels
                    </Text>
                  </View>
                  <Text style={{color: '#fff', fontSize: 30, top: -5}}>+</Text>
                </View>
              </View>
              <ScrollView style={{height: '100%'}}>
                <View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: 20,
                      alignItems: 'center',
                      borderBottomWidth: 0.5,
                      borderBottomColor: 'gray',
                    }}>
                    <Text
                      style={{
                        borderWidth: 2,
                        borderRadius: 7,
                        width: 23,
                        height: 15,
                        borderColor: 'red',
                      }}
                    />
                    <Text style={{left: 15}}>Oracle</Text>
                  </View>

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: 20,
                      alignItems: 'center',
                      borderBottomWidth: 0.5,
                      borderBottomColor: 'gray',
                    }}>
                    <Text
                      style={{
                        borderWidth: 2,
                        borderRadius: 7,
                        width: 23,
                        height: 15,
                        borderColor: 'red',
                      }}
                    />
                    <Text style={{left: 15}}>Oracle</Text>
                  </View>

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: 20,
                      alignItems: 'center',
                      borderBottomWidth: 0.5,
                      borderBottomColor: 'gray',
                    }}>
                    <Text
                      style={{
                        borderWidth: 2,
                        borderRadius: 7,
                        width: 23,
                        height: 15,
                        borderColor: 'red',
                      }}
                    />
                    <Text style={{left: 15}}>Oracle</Text>
                  </View>

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: 20,
                      alignItems: 'center',
                      borderBottomWidth: 0.5,
                      borderBottomColor: 'gray',
                    }}>
                    <Text
                      style={{
                        borderWidth: 2,
                        borderRadius: 7,
                        width: 23,
                        height: 15,
                        borderColor: 'red',
                      }}
                    />
                    <Text style={{left: 15}}>Oracle</Text>
                  </View>

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: 20,
                      alignItems: 'center',
                      borderBottomWidth: 0.5,
                      borderBottomColor: 'gray',
                    }}>
                    <Text
                      style={{
                        borderWidth: 2,
                        borderRadius: 7,
                        width: 23,
                        height: 15,
                        borderColor: 'red',
                      }}
                    />
                    <Text style={{left: 15}}>Oracle</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 100,
          right: 8,
        //   left: 0
        }}>
        <View
          style={{
            backgroundColor: '#264D7D',
            borderRadius: 80,
            padding: 10,
            width: 60,
            height: 60,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // alignSelf: 'flex-end'
        
          }}>
          <Text style={{fontSize: 40, color: '#fff', textAlign: 'center', top: -5}}>
            +
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PublicChannels;

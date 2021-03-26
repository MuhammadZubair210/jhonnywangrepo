import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  Alert,
} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Map from '../Components/Map/Map';
import EmailMarketing from '../Components/EmailMarketing/EmailMarketing';
import Home from '../Components/Home/Home';
import PublicChannels from '../Components/PublicChannels/PublicChannels';

import Timeline from '../Components/Timeline/Timeline';
import Notifications from '../Components/Notifications/Notifications';
// import Profile from '../Components/Profile/Profile';
import FastImage from 'react-native-fast-image';

const Tab = createMaterialBottomTabNavigator();
const {width, height} = Dimensions.get('screen');

function MyTabs({...props}) {
  return (
      <Tab.Navigator
        shifting={true}
        labeled={false}
        sceneAnimationEnabled={false}
        activeColor="#ffff"
        inactiveColor="#ffff"
        barStyle={{backgroundColor: '#FAFAFA', height: 75}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}: any) => (
              <View>
                {focused ? (
                  <TouchableOpacity style={styles.line1}>
                    <FastImage
                      source={require('../assets/Home2.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text style={{marginTop: 2, color: '#264D7D', fontSize: 13}}>Home</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.line1}>
                    <FastImage
                      source={require('../assets/Home2.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text style={{marginTop: 2, fontSize: 13}}>Home</Text>
                  </TouchableOpacity>
                )}
              </View>
            ),

            title: '',
            tabBarOptions: {
              labelStyle: {
                fontSize: 12,
              },
              tabStyle: {
                height: 55,
              },
              style: {
                height: 45,
                backgroundColor: '#fff',
              },
            },
          }}
        />

        <Tab.Screen
          name="Calendar"
          component={PublicChannels}
          options={{
            tabBarIcon: ({focused}: any) => (
              <View>
                {focused ? (
                  <TouchableOpacity style={styles.line1}>
                    <FastImage
                      source={require('../assets/Networking.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text style={{marginTop: 2, color: '#264D7D',fontSize: 13}}>Networking</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.line1}>
                    <FastImage
                      source={require('../assets/Networking.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text style={{marginTop: 2, fontSize: 13}}>
                    Networking
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            ),

            title: '',
            tabBarOptions: {
              labelStyle: {
                fontSize: 12,
              },
              tabStyle: {
                height: 55,
              },
              style: {
                height: 45,
                backgroundColor: '#fff',
              },
            },
          }}
        />

<Tab.Screen
          name="Message"
          component={PublicChannels}
          options={{
            tabBarIcon: ({focused}: any) => (
              <View>
                {focused ? (
                  <TouchableOpacity style={styles.line1}>
                    <FastImage
                      source={require('../assets/Message.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text style={{marginTop: 2,color: '#264D7D', fontSize: 13}}>Message</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.line1}>
                    <FastImage
                      source={require('../assets/Message.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text style={{marginTop: 2, fontSize: 13}}>
                    Message
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            ),

            title: '',
            tabBarOptions: {
              labelStyle: {
                fontSize: 12,
              },
              tabStyle: {
                height: 55,
              },
              style: {
                height: 45,
                backgroundColor: '#fff',
              },
            },
          }}
        />

        <Tab.Screen
          name="Timeline"
          component={PublicChannels}
          options={{
            tabBarIcon: ({focused}: any) => (
              <View>
                {focused ? (
                  <TouchableOpacity style={styles.line1}>
                    <FastImage
                      source={require('../assets/Discover.png')}
                      style={{width: 28, height: 26}}
                    />
                    <Text style={{marginTop: 2, color: '#264D7D', fontSize: 13}}>Discover</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.line1}>
                    <FastImage
                      source={require('../assets/Discover.png')}
                      style={{width: 28, height: 26}}
                    />
                    <Text style={{marginTop: 2,fontSize: 13, }}>
                    Discover
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            ),

            title: '',
            tabBarOptions: {
              labelStyle: {
                fontSize: 12,
              },
              tabStyle: {
                height: 55,
              },
              style: {
                height: 45,
                backgroundColor: '#fff',
              },
            },
          }}
        />

        <Tab.Screen
          name="Alert"
          component={PublicChannels}
          options={{
            tabBarIcon: ({focused}: any) => (
              <View>
                {focused ? (
                  <TouchableOpacity style={styles.line1}>
                    <FastImage
                      source={require('../assets/Profile2.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text style={{marginTop: 2, color: '#264D7D', fontSize: 13}}>Profile</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.line1}>
                    <FastImage
                      source={require('../assets/Profile2.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text style={{marginTop: 2, fontSize: 13}}>Profile</Text>
                  </TouchableOpacity>
                )}
              </View>
            ),

            title: '',
            tabBarOptions: {
              labelStyle: {
                fontSize: 12,
              },
              tabStyle: {
                height: 55,
              },
              style: {
                height: 45,
                backgroundColor: '#fff',
              },
            },
          }}
        />
        {/* <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}: any) => (
              <View>
                {focused ? (
                  <TouchableOpacity style={styles.line1}>
                    <FastImage
                      source={require('../assets/user_active.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text style={{marginTop: 2}}>Profile</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.line1}>
                    <FastImage
                      source={require('../assets/user.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text style={{marginTop: 2, color: '#AAA7A7'}}>
                      Profile
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            ),

            title: '',
            tabBarOptions: {
              labelStyle: {
                fontSize: 12,
              },
              tabStyle: {
                height: 55,
              },
              style: {
                height: 45,
                backgroundColor: '#fff',
              },
            },
          }}
        /> */}
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  line1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    // height:70
  },
});

export default MyTabs;

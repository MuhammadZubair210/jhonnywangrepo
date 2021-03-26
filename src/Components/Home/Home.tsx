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
} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('screen');

export interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({...props}) => {
  const data = [
      {
          profileName: "Mian Chen",
          experience: "SAP . User Experience Designer",
          expiry: 'Expire in 10 days',
          likes: 0,
          comments: 3,
          share: 1,
      },
      {
        profileName: "Yong Qi",
        experience: "Oracle . Software Engineer",
        expiry: 'Expire in 10 days',
        likes: 23,
        comments: 11,
        share: 5,
    },
    {
        profileName: "Mian Chen",
        experience: "Game Lover",
        expiry: 'Expire in 10 days',
        likes: 0,
        comments: 3,
        share: 1,
    }
  ];

  const [click, isClick] = useState('')
  return (
    <View style={{width: width}}>
      <View
        style={{
          overflow: 'hidden',
        }}>
        <View style={styles.timelineView}>
          <View
            style={{
              marginTop: 30,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <FastImage
                source={require('../../assets/img5.png')}
                style={styles.profileImg}
                resizeMode={'cover'}
              />
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                width: '80%',
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 20,
                padding: 5,
              }}>
              <FastImage
                source={require('../../assets/search.png')}
                style={{height: 23, width: 23, top: -1, left: 4}}
                resizeMode={'cover'}
              />
              <TextInput
                placeholder={'Search'}
                style={{left: 10, color: '#264D7D'}}
              />
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: 25,
                height: 25,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                top: 5,
              }}>
              <Text style={{color: '#264D7D', fontSize: 20, top: -1}}>+</Text>
            </View>
          </View>
{isClick ?  <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: '700'}}>
              Recommend
            </Text>
            <Text
              style={{
                left: 12,
                color: '#fff',
                fontSize: 13,
                fontWeight: '400',
              }}>
              Anontmous
            </Text>
          </View> :  <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: '700'}}>
              Recommend
            </Text>
            <Text
              style={{
                left: 12,
                color: '#fff',
                fontSize: 13,
                fontWeight: '400',
              }}>
              Anontmous
            </Text>
          </View>}

          {/* <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: '700'}}>
              Recommend
            </Text>
            <Text
              style={{
                left: 12,
                color: '#fff',
                fontSize: 13,
                fontWeight: '400',
              }}>
              Anontmous
            </Text>
          </View> */}
        </View>
      </View>

      <ScrollView>
        <View style={styles.viewImg}>
          {/* ************* Second ****** */}

          {data.map((user, ind) => (
            <View key={ind} style={{marginTop: ind === 0 ? 0 : 10}}>
              <View style={styles.postView}>
                <View style={styles.postView2}>
                  <View style={styles.viewPostTime}>
                    <View>
                      <FastImage
                        source={require('../../assets/img5.png')}
                        style={styles.profileImg}
                        resizeMode={'cover'}
                      />
                    </View>

                    <View style={{left: 10}}>
          <Text style={styles.profileName}>{user.profileName}</Text>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text style={styles.time}>
                        {user.experience}
                        </Text>
                        <FastImage
                          source={require('../../assets/verified.png')}
                          style={{height: 15, width: 15, left: 5}}
                        />
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={styles.dots} />
                    <View style={styles.dots2} />
                    <View style={styles.dots3} />
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 5,
                    }}>
                    <Text>Oracle SDE (Cloud) Referral</Text>
                    <View style={{left: 10}}>
                      <TouchableOpacity
                        style={styles.referralBorder}
                        activeOpacity={0.5}>
                        <Text style={styles.referralText}># Referral</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text style={{fontSize: 11, color: '#096DD9'}}>
                  {user.expiry}
                  </Text>

                  <Text style={{fontSize: 12, marginTop: 8}}>
                    Oracle cloud group is looking for a mid-level software
                    engineer who has three years experience. Pls fill the
                    information below, I’m willing to help u...
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 10,
                      paddingLeft: 20,
                      paddingRight: 20,
                      top: 10,
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <FastImage
                        source={require('../../assets/liked.png')}
                        style={{width: 25, height: 25}}
                        resizeMode={'cover'}
                      />
                      <Text style={{color: '#ababab'}}>{user.likes}</Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <FastImage
                        source={require('../../assets/commentsRecommend.png')}
                        style={{width: 25, height: 25}}
                        resizeMode={'cover'}
                      />
                      <Text style={{color: '#ababab'}}>{user.comments}</Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <FastImage
                        source={require('../../assets/share.png')}
                        style={{width: 25, height: 25}}
                        resizeMode={'cover'}
                      />
                      <Text style={{color: '#ababab'}}>{user.share}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

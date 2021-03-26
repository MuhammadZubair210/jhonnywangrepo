import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import VerifyEmail from '../Components/Login/VerifyEmail';
import RequestADemo from '../Components/Login/RequestADemo';
import NotAssociatedEmail from '../Components/Login/NotAssociatedEmail';
import Onboarding from '../Components/Onboarding/Onboarding';
import EmailMarketing from '../Components/EmailMarketing/EmailMarketing';
import PublicChannels from '../Components/PublicChannels/PublicChannels';
import Recommend from '../Components/Home/Home';

import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const MyStack = ({...props}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">

      {/* <Stack.Screen name="Recommend">
          {(a: any) => <Recommend {...a} />}
        </Stack.Screen> */}




        {/* <Stack.Screen name="PublicChannels">
          {(a: any) => <PublicChannels {...a} />}
        </Stack.Screen> */}




        {/* <Stack.Screen name="Onboarding">
          {(a: any) => <Onboarding {...a} />}
        </Stack.Screen>
        <Stack.Screen name="VerifyEmail">
          {(a: any) => <VerifyEmail {...a} />}
        </Stack.Screen>
        <Stack.Screen name="RequestADemo">
          {(a: any) => <RequestADemo {...a} />}
        </Stack.Screen>

        <Stack.Screen name="NotAssociatedEmail">
          {(a: any) => <NotAssociatedEmail {...a} />}
        </Stack.Screen>

       

        <Stack.Screen name="EmailMarketing">
          {(a: any) => <EmailMarketing {...a} />}
        </Stack.Screen> */}

        <Stack.Screen name="TabNavigation">
          {(a: any) => <TabNavigation {...a} />}
        </Stack.Screen> 
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default MyStack;

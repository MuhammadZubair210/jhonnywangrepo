/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation from './src/navigation/TabNavigation';
import StackNavigation from './src/navigation/StackNavigation';
import Onboarding from './src/Components/Onboarding/Onboarding';
import VerifyEmail from './src/Components/Login/VerifyEmail';
import NotAssociatedEmail from './src/Components/Login/NotAssociatedEmail';
import RequestADemo from './src/Components/Login/RequestADemo';
import Schedule from './src/Components/Schedule/Schedule';
import EmailMarketing from './src/Components/EmailMarketing/EmailMarketing';
import Map from './src/Components/Map/Map';
import Notifications from './src/Components/Notifications/Notifications';
import Profile from './src/Components/Profile/Profile';
import Timeline from './src/Components/Timeline/Timeline';

export interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      {/* <Timeline/> */}
      {/* <Schedule /> */}
      {/* <Profile/> */}
      <StackNavigation />
      {/* <Map /> */}
      {/* <EmailMarketing/> */}
      {/* <Schedule/> */}
      {/* <Navigation /> */}
      {/* <RequestADemo/> */}
      {/* <NotAssociatedEmail/> */}
      {/* <VerifyEmail /> */}
      {/* <Onboarding /> */}
    </>
  );
};

export default App;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Enteryscreen from './app/Entryscreen/Enteryscreen';
import EntryScreen2 from './app/components/EntryScreen2';
import Onboarding from './app/Onboarding/Onboarding';
import Onboarding_buisness from './app/Onboarding_buisness';
import Onboarding_verification from './app/Onboarding_verification';

const firebaseConfig = {
  apiKey: "AIzaSyDUSEV08m6DAb4ghy6KBjz7qfic92YUCPU",
  authDomain: "investify-85702.firebaseapp.com",
  projectId: "investify-85702",
  storageBucket: "investify-85702.appspot.com",
  messagingSenderId: "268673446257",
  appId: "1:268673446257:web:1be18cddd40ff99e4106d0",
  measurementId: "G-J4DKLT8YBW"
};


export default function App() {

  const [fontsLoaded] = useFonts({
    'NovaRound-Regular': require('./assets/fonts/NovaRound-Regular.ttf'),
    'BeVietnamPro-SemiBold': require('./assets/fonts/BeVietnamPro-SemiBold.ttf'),
    'BeVietnamPro-Regular': require('./assets/fonts/BeVietnamPro-Regular.ttf'),
    'BeVietnamPro-Bold': require('./assets/fonts/BeVietnamPro-Bold.ttf')
  });


  return (
    <View style={styles.container}>
     <Onboarding_verification />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

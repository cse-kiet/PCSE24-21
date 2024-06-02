import { useCallback } from 'react';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { View , StyleSheet ,Text} from 'react-native';
import EntryScreen2 from './components/EntryScreen2';
import HomeScreen from './components/HomeScreen';
import { Stack ,useRouter } from 'expo-router';
import useAuth from '../hooks/useAuth';



SplashScreen.preventAutoHideAsync();




export default function Page() {
  

    const user = useAuth();
    const router = useRouter();
    const [fontsLoaded, fontError] = useFonts({
        'NovaRound-Regular': require('../assets/fonts/NovaRound-Regular.ttf'),
        'BeVietnamPro-SemiBold': require('../assets/fonts/BeVietnamPro-SemiBold.ttf'),
        'BeVietnamPro-Regular': require('../assets/fonts/BeVietnamPro-Regular.ttf'),
        'BeVietnamPro-Bold': require('../assets/fonts/BeVietnamPro-Bold.ttf')
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);

      if (!fontsLoaded && !fontError) {
        return null;
      }

      if(user){
        
      }

  return (
     <View style={styles.container} onLayout={onLayoutRootView}>
        <Stack.Screen
        options={{
          headerShown : false,
          headerShadowVisible: false,
        }}/>
           {user ? <EntryScreen2 /> : <HomeScreen />}
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      backgroundColor: "#FBFBFB",
    },
  });


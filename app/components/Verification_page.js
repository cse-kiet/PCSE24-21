import { Image, StyleSheet, TouchableOpacity, View , Text} from 'react-native'
import React from 'react'
import Back2 from '../../assets/images/Background2.js'
import Left from '../../assets/images/Left.js';
import { Stack  , useRouter} from 'expo-router';

const Verfication_page = () => {

    const router = useRouter();
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown : false,
          headerShadowVisible: false,
        }}/>
        <View style={styles.topCtn}>
            <TouchableOpacity onPress={() => {router.dismissAll()
            router.push(`/components/EntryScreen2`)}}
            style={styles.icon}
            >
            <Left/>
            </TouchableOpacity>
            <Back2 />
        </View>
        <View style={styles.img}><Image 
        source={require('../../assets/images/wait.png')}
       />
       <Text style={[styles.txt , styles.txtHeading]}>Hang on!</Text>
       <Text style={[styles.txt , styles.txtSubHeading]}>We will get back to you after </Text> 
       <Text style={[styles.txt , styles.txtSubHeading]}>verifying your documents.</Text>
       </View>
    </View>
  )
}

export default Verfication_page

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBFBFB",
        height: "100%",
    },
    topCtn:{
       justifyContent: 'space-between',
       flexDirection: 'row',
    },
   icon:{
    marginLeft: 30,
    marginTop: 60,
   },
   img:{
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -100
   },
   txt: {
    textAlign: 'center',
    
   },
   txtHeading:{
    fontFamily: 'BeVietnamPro-SemiBold',
    fontSize: 36,
    marginTop: -30,
    color: '#212226'
   },
   txtSubHeading:{
    fontFamily: 'BeVietnamPro-Regular',
    fontSize: 18,
    color: '#212226'
   }
})
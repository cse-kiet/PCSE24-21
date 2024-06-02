import { Image, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { Stack , Link} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
         <Stack.Screen
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Text style={styles.titleHeading}>Profile</Text>
      <View  style={styles.ProfileContainer}>
        <Image style={styles.img} />
        <Text style={{color: "#212226" , fontSize : 20 , marginTop: 12}}>Name</Text>
        <Text style={{color: "#212226" , fontSize : 20 , marginTop: 12}}>Email</Text>
        <View>
          <TouchableOpacity style={styles.button}>
            <Link
              href="/components/HomeScreen"
              style={styles.buttonText}
            >
              Edit Profile
            </Link>
          </TouchableOpacity>
        </View>
       <View style={{alignItems: "flex-start" , width: "100%"}}>
        <Text style={{backgroundColor:"rgba(234 , 234,234,0.8)" , width: "100%" , marginTop: 16 , height: 24, paddingLeft: 24}}>Content</Text>
        <Text style={{color: "#212226" , fontSize : 20 , marginTop: 12 , marginLeft: 24 , height: 24}} >My Investments</Text>
        <Text style={{color: "#212226" , fontSize : 20 , marginTop: 12, marginLeft: 24, height: 24}}>Companies</Text>
        <Text style={{color: "#212226" , fontSize : 20 , marginTop: 12, marginLeft: 24 , height:24 }}>Log Out</Text>
       </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity>
          <Link href="/components/HomeScreen">
            <Image
              style={styles.swipeButton}
              source={require("../../assets/images/home_filled.png")}
            />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="/components/ChatListScreen">
            <Image
              style={styles.swipeButton}
              source={require("../../assets/images/forum.png")}
            />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
        <Link href="/components/Profile">
          <Image
            style={styles.swipeButton}
            source={require("../../assets/images/person.png")}
          />
          </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBFBFB",
      },
      titleHeading: {
        fontFamily: "BeVietnamPro-Bold",
        color: "#212226",
        fontSize: 30,
        textAlign: "left",
        marginLeft: 30,
        marginTop: 30
      },
      ProfileContainer:{
        marginTop: 20,
        alignItems: "center",
        height: "85%",
        width: "100%"
      },
      img:{
        width: 200,
        height: 200,
        backgroundColor: "grey",
        borderRadius: 300,
      },
      buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        
      },
      swipeButton: {
        width: 36,
        height: 36,
      },
      button: {
        textAlign: "center",
        height: 45,
        marginTop: 8,
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        fontFamily: "BeVietnamPro-Regular",
        backgroundColor: "#4B72FF",
        borderRadius: 20,
        marginLeft: "auto",
        marginRight: "auto",
      },
      buttonText: {
        fontSize: 20,
        fontFamily: "BeVietnamPro-Regular",
        color: "#fff",
      },
})
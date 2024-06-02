import { SafeAreaView, StyleSheet, Text, View  ,TouchableOpacity , TextInput} from 'react-native'
import {React , useRef} from 'react'
import { Stack , useRouter , Link} from 'expo-router'
import Left from '../../assets/images/Left'
import BackLog from '../../assets/images/BackLog'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {

const router = useRouter();



const formFields = [
    {
      id: "Email Id",
      placeholder: "Your Email",
      autoCapitalize: "none",
      keyboardType: "email-address",
    },
    {
      id: "Password",
      placeholder: "Password",
      secureTextEntry: true,
      autoCapitalize: "none",
      keyboardType: "default",
    },
  ];

  const refs = useRef({});

  const add = () => {
    const formData = {};
    formFields.forEach((field) => {
      formData[field.id] = refs.current[field.id];
    });
    setEmail(refs.current["Email Id"]);
    setPassword(refs.current["Password"]);
  }

  const handleSubmit = async () => {
    // if (!validateEmail(refs.current['Email Id'])) {
    //   alert('invalid email');
    //   return;
    // }
    
    add();
    
    if(email && password) {
      try {
          await signInWithEmailAndPassword(auth , email , password);
      }
      catch(err){
        console.log(err.message)
      }
    }

  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };



  return (
    <SafeAreaView style={styles.container}>
         <Stack.Screen
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <View style={styles.topCtn}>
        <TouchableOpacity onPress={() => router.back()} style={styles.icon}>
          <Left />
        </TouchableOpacity>
      </View>
     <View style={{alignItems: "center"}}><BackLog /></View>
     <Text style={styles.titleHeading}>Login</Text>
     <View>
        {formFields.map((field) => (
          <View key={field.id} style={styles.fields}>
            <Text style={styles.fieldsText}>
              {field.id}
              <Text style={{ color: "#FF6861" }}>*</Text>
            </Text>
            <TextInput
              onChangeText={(text) => {
                if (refs.current) {
                  refs.current[field.id] = text;
                }
              }}
              placeholder={field.placeholder}
              placeholderTextColor="#818181"
              autoCapitalize={field.autoCapitalize}
              spellCheck={false}
              secureTextEntry={field.secureTextEntry}
              style={styles.fieldsInput}
              keyboardType={field.keyboardType}
            />
          </View>
        ))}
        <View>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Link
              href="/components/HomeScreen"
              style={styles.buttonText}
            >
              Login
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    
      </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBFBFB",
        height: "100%",
      },
      icon: {
        marginLeft: 30
      },
      titleHeading: {
        fontFamily: "BeVietnamPro-Bold",
        color: "#212226",
        fontSize: 38,
        textAlign: "left",
   
        marginLeft: 30,
      },
      rect: {
        backgroundColor: "#fbfbfb",
        alignItems: "center",
        height: 125,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        zIndex: -1,
      },
      circleContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: 300,
        marginTop: 28,
      },
      circle: {
        width: 60,
        height: 60,
         borderRadius: "50%",
        backgroundColor: "#BAC4CD",
      },
      activeCircle: {
        width: 60,
        height: 60,
         borderRadius: "50%",
        backgroundColor: "#4B72FF",
      },
      circleText: {
        textAlign: "center",
        marginTop: 14,
        fontSize: 26,
        fontFamily: "BeVietnamPro-Bold",
        color: "#fff",
      },
      textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 330,
        marginTop: 8,
        marginLeft: -10,
      },
      heading: {
        textAlign: "justify",
        fontSize: 12,
        fontFamily: "BeVietnamPro-Bold",
      },
      middleItem: {
        marginRight: 4,
      },
      fields: {
        marginTop: 24,
        marginLeft: 30,
      },
      fieldsText: {
        fontSize: 18,
        color: "#212226",
        fontFamily: "BeVietnamPro-Regular",
      },
      fieldsInput: {
        marginTop: 12,
        height: 45,
        width: "90%",
        borderBottomColor: "#212226",
        borderRadius: 8,
        borderBottomWidth: 1,
        paddingLeft: 7,
        fontSize: 16,
        fontFamily: "BeVietnamPro-Regular",
      },
      button: {
        textAlign: "center",
        height: 45,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        width: "60%",
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
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import Back from "../../assets/images/Background.js";
import Left from "../../assets/images/Left.js";
import { Link, Stack, useRouter } from "expo-router";

const Onboarding = () => {
  const router = useRouter();

  const steps = [1, 2, 3];

  const stepsHeadings = ["Contact Details", "Business Details", "Verification"];

  const formFields = [
    { id: "Name", placeholder: "Your Name", keyboardType: "default" },
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
    { id: "Contact Number", placeholder: "+91", keyboardType: "numeric" },
  ];

  const refs = useRef({});

  const handleSubmit = () => {
    // if (!validateEmail(refs.current['Email Id'])) {
    //   alert('invalid email');
    //   return;
    // }

    const formData = {};
    formFields.forEach((field) => {
      formData[field.id] = refs.current[field.id];
    });
    console.log("Form data:", formData);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  return (
    <View style={styles.container}>
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
        <Back />
      </View>
      <Text style={styles.titleHeading}>Sign Up</Text>
      <View style={styles.rect}>
        <View style={styles.circleContainer}>
          {steps.map((item, index) => (
            <View
              style={[
                item === 1 && styles.activeCircle,
                item === 2 && styles.circle,
                item === 3 && styles.circle,
              ]}
              key={index}
            >
              <Text style={styles.circleText}>{item}</Text>
            </View>
          ))}
        </View>
        <View style={styles.textContainer}>
          {stepsHeadings.map((item, index) => (
            <View>
              <Text
                key={index}
                style={[styles.heading, index === 2 && styles.middleItem]}
              >
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>
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
              href="/components/Onboarding_buisness"
              style={styles.buttonText}
            >
              Next
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBFBFB",
    height: "100%",
  },
  topCtn: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon: {
    marginLeft: 30,
    marginTop: 60,
  },
  titleHeading: {
    fontFamily: "BeVietnamPro-Bold",
    color: "#212226",
    fontSize: 38,
    textAlign: "center",
    marginTop: -120,
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
    backgroundColor: "#F2F4FB",
    borderRadius: 8,
    paddingLeft: 12,
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
});

import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import Back from "../../assets/images/Background.js";
import Left from "../../assets/images/Left.js";
import { useState } from "react";
import { Stack, useRouter, Link } from "expo-router";

const Onboarding = () => {
  const router = useRouter();

  const steps = [1, 2, 3];

  const stepsHeadings = ["Contact Details", "Business Details", "Verification"];

  const formFields = [
    { id: "Aadhar Number", placeholder: "Aadhar No." },
    { id: "Upload Aadhar", placeholder: "Email" },
    { id: "GSTIN Number", placeholder: "" },
  ];

  const refs = useRef({});

  const handleSubmit = () => {
    const formData = {};
    formFields.forEach((field) => {
      formData[field.id] = refs.current[field.id];
    });
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
            <View style={styles.circle} key={index}>
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
      <ScrollView>
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
              secureTextEntry={field.secureTextEntry}
              style={styles.fieldsInput}
            />
          </View>
        ))}
        <View>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Link
              href="/components/Verification_page"
              style={styles.buttonText}
            >
              Finish
            </Link>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginBottom: 60,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "BeVietnamPro-Regular",
    color: "#fff",
  },
});

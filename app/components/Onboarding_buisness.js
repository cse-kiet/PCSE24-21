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
import { Dropdown } from "react-native-element-dropdown";
import { Stack, useRouter, Link } from "expo-router";

const Onboarding = () => {
  const router = useRouter();

  const [value, setValue] = useState(null);

  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  const steps = [1, 2, 3];

  const stepsHeadings = ["Contact Details", "Business Details", "Verification"];

  const formFields = [
    { id: "Buisness Name", placeholder: "Name" },
    { id: "Buisness Email Id", placeholder: "Email", autoCapitalize: "none" },
    { id: "Buisness Contact Number", placeholder: "+91" },
    { id: "Address", placeholder: "Buisness address" },
    { id: "Type of Buisness", placeholder: "select" },
    { id: "Annual Returns(Approx)", placeholder: "₹" },
  ];

  const refs = useRef({});

  const handleSubmit = () => {
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
                item === 2 && styles.activeCircle,
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {formFields.map((field) => {
          return (
            <View key={field.id} style={styles.fields}>
              <Text style={styles.fieldsText}>
                {field.id}
                <Text style={{ color: "#FF6861" }}>*</Text>
              </Text>
              {field.id === "Type of Buisness" ? (
                <Dropdown
                  style={styles.fieldsInput}
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={"Select item"}
                  value={value}
                  onChange={(item) => {
                    setValue(item.value);
                    if (refs.current) {
                      refs.current[field.id] = item.label;
                    }
                  }}
                />
              ) : (
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
                />
              )}
            </View>
          );
        })}
        <View>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Link
              href="/components/Onboarding_verification"
              style={styles.buttonText}
            >
              Next
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
    marginBottom: 60,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "BeVietnamPro-Regular",
    color: "#fff",
  },
});

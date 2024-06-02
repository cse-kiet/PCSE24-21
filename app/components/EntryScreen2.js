import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link, Stack, useRouter } from "expo-router";

export default function EntryScreen2() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Image
        source={require("../../assets/images/bro.png")}
        style={styles.img}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Link href="/components/Onboarding" style={styles.btnText}>
            Join as a Buisness
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Link href="/components/Investor_onboarding" style={styles.btnText}>
            Join as an Investor
          </Link>
        </TouchableOpacity>
      </View>
      <Text style={styles.txt}>
        Already have an account?{" "}
        <Link href="/components/Login"
          style={{ color: "#4B72FF", textDecorationLine: "underline" }}
        >
          Login
        </Link>
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FBFBFB",
  },
  img: {
    marginTop: 50,
  },
  btnContainer: {
    marginTop: 60,
    width: "80%",
    flex: 1,
    alignItems: "center",
  },
  btn: {
    width: "90%",
    padding: 15,
    backgroundColor: "#4B72FF",
    borderRadius: "30%",
    marginTop: 40,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "BeVietnamPro-SemiBold",
  },
  txt: {
    color: "#212226",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "BeVietnamPro-SemiBold",
  },
});

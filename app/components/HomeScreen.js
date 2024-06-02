import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import Wait from "../../assets/images/Wait1.js";
import { Link, useRouter , Stack } from "expo-router";

const DUMMY_DATA = [
  {
    displayName: "Homespices Pvt Ltd.",
    desp: "Software EngineerLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aenean duis porttitor faucibus egestas amet sem.",
    photoURL: require("../../assets/images/1.png"),
    type: "Food and Drinks",
    min_inv: "Rs 2,00,000",
    equity: "4%",
    mail: "rawjuices123@gmail.com",
    number: "91xxxxxxxx",
    id: 1,
  },
  {
    displayName: "Momos Pvt Ltd.",
    desp: "Software EngineerLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aenean duis porttitor faucibus egestas amet sem.",
    photoURL: require("../../assets/images/2.png"),
    type: "Technology",
    min_inv: "Rs 10,00,000",
    equity: "10%",
    mail: "markzuckerberg@facebook.com",
    number: "91xxxxxxxx",
    id: 2,
  },
  {
    displayName: "Raw Juices Pvt Ltd.",
    desp: "Software EngineerLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aenean duis porttitor faucibus egestas amet sem.",
    photoURL: require("../../assets/images/3.png"),
    type: "Technology",
    min_inv: "Rs 5,00,000",
    equity: "5%",
    mail: "justinmateen@tinder.com",
    number: "91xxxxxxxx",
    id: 3,
  },
];

const HomeScreen = () => {
  const [profiles, setProfiles] = useState(DUMMY_DATA);
  const [isSwipingComplete, setIsSwipingComplete] = useState(false);
  const swipeRef = useRef(null);
  const router = useRouter();

  const swipeLeft = (cardIndex) => {
    if (!profiles[cardIndex]) return;
    console.log("Swipe Pass:", profiles[cardIndex].displayName);
  };

  const swipeRight = (cardIndex) => {
    if (!profiles[cardIndex]) return;
    console.log("Swipe Match:", profiles[cardIndex].displayName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown : false,
          headerShadowVisible: false,
        }}/>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("Logout")}>
          <Image
            style={styles.profileImage}
            source={require("../../assets/images/filter.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Chat")}>
          <Image
            style={styles.profileImage}
            source={require("../../assets/images/bell.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.swiperContainer}>
        {isSwipingComplete ? (
          <View style={styles.noMoreProfiles}>
            <Wait />
            <Text style={styles.noMoreProfilesText}>Come back for more!</Text>
          </View>
        ) : (
          <Swiper
            ref={swipeRef}
            cards={profiles}
            stackSize={5}
            cardIndex={0}
            animateCardOpacity
            verticalSwipe={false}
            onSwipedLeft={(cardIndex) => {
              console.log("Swiped Left");
              swipeLeft(cardIndex);
              if (cardIndex === profiles.length - 1) setIsSwipingComplete(true);
            }}
            onSwipedRight={(cardIndex) => {
              console.log("Swiped Right");
              swipeRight(cardIndex);
              if (cardIndex === profiles.length - 1) setIsSwipingComplete(true);
            }}
            backgroundColor="#FBFBFB"
            overlayLabels={{
              left: {
                title: "NOPE",
                style: {
                  label: {
                    textAlign: "right",
                    color: "red",
                  },
                },
              },
              right: {
                title: "MATCH",
                style: {
                  label: {
                    color: "#4DED30",
                  },
                },
              },
            }}
            renderCard={(card) => (
              <View key={card.id} style={styles.card}>
                <Image style={styles.cardImage} source={card.photoURL} />
                <View style={styles.cardDetails}>
                  <View>
                    <Text style={styles.cardText}>{card.displayName}</Text>
                    <Text style={{ marginTop: 5 }}>{card.desp}</Text>
                    <Text style={{ marginTop: 10 }}>
                      <Text style={styles.cardText2}>Type of Buisness: </Text>
                      {card.type}
                    </Text>
                  </View>
                </View>
                <View style={styles.cardDetails}>
                  <View>
                    <Text>
                      <Text style={styles.cardText2}>Minimum Investment: </Text>
                      {card.min_inv}
                    </Text>
                  </View>
                  <Text>
                    <Text style={styles.cardText2}>Equity: </Text>
                    {card.equity}
                  </Text>
                </View>
                <View style={styles.cardDetails2}>
                  <Text style={styles.cardText2}>Contact Us</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <Image
                      style={styles.icon}
                      source={require("../../assets/images/mail.png")}
                    />
                    <Text style={{ color: "#818181", marginLeft: 5 }}>
                      {card.mail}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <Image
                      style={styles.icon}
                      source={require("../../assets/images/phone.png")}
                    />
                    <Text style={{ color: "#818181", marginLeft: 5 }}>
                      {card.number}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => console.log("clicked")}>
          <Link  href="/components/HomeScreen">
            <Image
              style={[styles.swipeButton]}
              source={require("../../assets/images/home_filled.png")}
            />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link  href="/components/ChatListScreen">
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
    color: "#212226",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#FBFBFB"
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  logoImage: {
    height: 56,
    width: 56,
  },
  icon: {
    width: 20,
    height: 20,
  },
  swiperContainer: {
    flex: 1,
    backgroundColor: "transparent",
    backgroundColor: "#FBFBFB"
  },
  card: {
    backgroundColor: "#FBFBFB",
    height: "100%",
  },
  cardImage: {
    marginTop: -40,
    height: "55%",
    width: "100%",
    borderRadius: 20,
  },
  cardDetails: {
    marginTop: 10,
    bottom: 0,
    backgroundColor: "#FBFBFB",
    width: "100%",
    height: "max-content",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  cardDetails2: {
    marginTop: 0,
    bottom: 0,
    backgroundColor: "#FBFBFB",
    width: "100%",
    height: "max-content",
    flexDirection: "column",
  },
  cardText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  cardText2: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardJob: {},
  cardAge: {
    fontSize: 28,
    fontWeight: "bold",
  },
  noMoreProfiles: {
    backgroundColor: "#FBFBFB",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  noMoreProfilesText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
  },
  noMoreProfilesImage: {
    height: 80,
    width: 80,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 16,
  },
  swipeButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    width: 36,
    height: 36,
  },
  swipeButtonLeft: {
    backgroundColor: "rgba(255, 0, 0, 0.2)",
  },
  swipeButtonRight: {
    backgroundColor: "rgba(0, 128, 0, 0.2)",
  },
});

export default HomeScreen;

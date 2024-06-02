import React, { useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { chatData } from "../constants";
import { Link, Stack, useRouter } from "expo-router";

const ChatListScreen = () => {
  const router = useRouter();

  const renderItem = useCallback(({ item, index }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Link href={{
          pathname: `/components/chats/${index + 1}`,
          params: {
            imgUrl: item.imgPath
          },
        }}  >
        <Image source={item.imgPath} style={{width: 40 , height: 40 ,borderRadius:50  }} />
        <View style={{paddingLeft: 12}}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.lastMessageText}>
            {item.lastMessage.length > 45
              ? item.lastMessage.slice(0, 45) + "..."
              : item.lastMessage}
          </Text>
        </View>
      </Link>
    </TouchableOpacity>
  ), []);

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <View style={styles.chatListContainer}>
        <Text style={styles.headerText}>Chats</Text>
        <FlatList
          data={chatData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
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
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FBFBFB",
  },
  chatListContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  itemSeparator: {
    height: 1,
    backgroundColor: "#D1D1D1",
    marginVertical: 8,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    marginLeft: 14,
    marginBottom: 8,
    maxWidth : "100%"
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  lastMessageText: {
    fontSize: 14,
    color: "#737373",
    marginTop: 4,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
   
  },
  swipeButton: {
    width: 36,
    height: 36,
  },
});

export default ChatListScreen;

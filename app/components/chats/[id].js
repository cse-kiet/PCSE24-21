import React, { useCallback, useRef, useState , useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
  SafeAreaView,
  Image
} from "react-native";
import { useLocalSearchParams , Stack , useRouter} from "expo-router";
import { chatData } from "../../constants";
import Left from "../../../assets/images/Left";

const otherMessages = ["message 1", "message 2", "message 3"];

const ChatDetails = () => {
  const { id , imgUrl } = useLocalSearchParams();
  const messageIndex = useRef(0);
  const flatListRef = useRef(null);
  const [chatDetails, setChatDetails] = useState(chatData[id - 1] || null);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter()

  // useEffect(() => {
  //   if (flatListRef.current) {
  //     flatListRef.current.scrollToEnd({ animated: true });
  //   }
  // }, [chatDetails.chat]);

  const sendOtherMessage = useCallback(
    (updatedChats) => {
      const chatCopy = JSON.parse(JSON.stringify(updatedChats));

      if (messageIndex.current >= otherMessages?.length) {
        messageIndex.current = 0;
      }

      chatCopy?.chat?.push({
        sender: chatDetails?.name,
        message: otherMessages?.[messageIndex?.current],
        timestamp: new Date().getTime(),
      });

      messageIndex.current = messageIndex?.current + 1;

      setChatDetails(chatCopy);
    },
    [chatDetails]
  );

  const sendMessage = useCallback(() => {
    const chatCopy = JSON.parse(JSON.stringify(chatDetails));

    chatCopy?.chat?.push({
      sender: "me",
      message: inputValue,
      timestamp: new Date().getTime(),
    });

    setChatDetails(chatCopy);
    setInputValue("");
    Keyboard.dismiss();

    console.log(imgUrl);

    setTimeout(() => {
      sendOtherMessage(chatCopy);
    }, 2000);
  }, [inputValue]);

  return (
    <>
      <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown : false,
          headerShadowVisible: false,
        }}/>
        <View style={{flexDirection:"row" , alignItems:"center" , marginLeft: 24}}>
        <TouchableOpacity onPress={() => router.back()} style={styles.icon}>
          <Left />
        </TouchableOpacity>
        <Image source={imgUrl} style= {styles.profilePic}/>
        <Text style={styles.header}>{chatDetails?.name}</Text>
        </View>
        
        <View style={styles.messagesContainer}>
          <FlatList
            ref={flatListRef}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-end"
              }}
            data={chatDetails?.chat}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            keyExtractor={(item) => item.timestamp}
            renderItem={({ item, index }) => (
              <Text
                style={[
                  styles.messageText,
                  {
                    alignSelf: item?.sender === "me" ? "flex-end" : "flex-start",
                    backgroundColor: item?.sender==="me" ? "#4B72FF" : "#E3E3E3",
                    color: item?.sender==="me" ? "#fff" : "#212226",
                  },
                ]}
              >
                {item?.message}
              </Text>
            )}
            onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
          />
        </View>
     
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />

        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={{color : "#fff"}}>Send</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FBFBFB"
  },
  profilePic:{
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 12
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 12
  },
  messagesContainer: {
   height: "90%",
   justifyContent: "flex-end"
  },
  messagesContent: {
    flex : 1,
    marginTop: 24,
    justifyContent: "flex-end",
  },
  separator: {
    height: 12,
    width: "100%",
  },
  messageText: {
    padding: 14,
    borderRadius: 20,
    marginHorizontal: 16,
    marginBottom: 8,
    overflow: "hidden",
    maxWidth: "80%"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#4B72FF",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 6,
    flex: 1,
  },
  sendButton: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#4B72FF",
    height: 32,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatDetails;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import axios from "axios";
import ChatBubble from "./ChatBubble";
import { speak, isSpeakingAsync, stop } from "expo-speech";

const Chatbot = () => {
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, SetError] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const API_KEY = "AIzaSyASlX_XHsdJCuqqwaxvlVbBf-RMncpnnbE";

  const handleUserInput = async () => {
    let updatedChat = [
      ...chat,
      {
        role: "user",
        parts: [{ text: userInput }],
      },
    ];
    setLoading(true);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          contents: updatedChat,
        }
      );

      const modelResponse =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

      if (modelResponse) {
        const updatedChatWithModel = [
          ...updatedChat,
          {
            role: "model",
            parts: [{ text: modelResponse }],
          },
        ];

        setChat(updatedChatWithModel);
        setUserInput("");
      }
    } catch (err) {
      console.error(err);
      SetError("An error occurred. Please try again");
    } finally {
      setLoading(false);
    }
  };

  const handleSpeech = async (text) => {
    if (isSpeaking) {
      stop();
      setIsSpeaking(false);
    } else {
      if (!(await isSpeakingAsync())) {
        speak(text);
        setIsSpeaking(true);
      }
    }
  };

  const renderChatItem = ({ item }) => (
    <ChatBubble
      role={item.role}
      text={item.parts[0].text}
      onSpeech={() => handleSpeech(item.parts[0].text)}
    />
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Prosecure Chat</Text>
      <FlatList
        data={chat}
        renderItem={renderChatItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type message"
          placeholderTextColor="#aaa"
          value={userInput}
          onChangeText={setUserInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleUserInput}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator style={styles.loading} color="#333" />}
      {error && <Text style={styles.error}>{error}</Text>}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    marginTop: 40,
    textAlign: "center",
  },
  chatContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40
  },
  input: {
    flex: 1,
    height: 50,
    marginRight: 10,
    padding: 8,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 25,
    color: "#333",
    backgroundColor: "#fff",
  },
  button: {
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  loading: {
    marginTop: 10,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default Chatbot;

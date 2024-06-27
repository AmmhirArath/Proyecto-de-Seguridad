import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import axios from 'axios';
import ChatBubble from './ChatBubble';
import { speak, isSpeakingAsync, stop } from 'expo-speech';

const Chatbot = () =>{
    const [chat, setChat] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, SetError] = useState(null);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const API_KEY = "AIzaSyASlX_XHsdJCuqqwaxvlVbBf-RMncpnnbE";

    const handleUserInput = async () =>{
        let updatedChat = [
            ...chat,
            {
                role: "user",
                parts: [{text: userInput }],
            },
        ];
        setLoading(true);

        try {
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
                
            )
        }
    }
}
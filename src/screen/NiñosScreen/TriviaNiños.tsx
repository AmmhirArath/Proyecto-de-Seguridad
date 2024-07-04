import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import { Modules } from '../../../ModuloNiños';
import { useNavigation, useRoute } from '@react-navigation/native';
import { shuffle } from 'lodash';
import Colores from '../../constants/Colores';

const TriviaNiños = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [feedbackVisible, setFeedbackVisible] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [triviaCompleted, setTriviaCompleted] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();
    const { Module } = route.params;

    useEffect(() => {
        if (!Module || !Module.id) {
            return;
        }
        
        const historia = Modules.Historias.find(h => h.id === Module.id);

        if (historia) {
            setQuestions(historia.preguntas.map(pregunta => ({
                question: pregunta.pregunta,
                options: shuffle(pregunta.respuestas.map(respuesta => respuesta.opcion)),
                correctAnswer: pregunta.respuestas.find(respuesta => respuesta.correcta).opcion,
                respuestas: pregunta.respuestas,
            })));
        }
    }, [Module]);

    const handleAnswer = (selectedAnswer) => {
        const correctAnswer = questions[currentQuestion].correctAnswer;
        const selectedQuestion = questions[currentQuestion];
        const selectedOption = selectedQuestion.options.find(option => option === selectedAnswer);

        if (selectedOption) {
            const feedback = selectedQuestion.respuestas.find(respuesta => respuesta.opcion === selectedOption);

            if (feedback) {
                showFeedback(feedback.retroalimentacion);
            }
        }

        if (selectedAnswer === correctAnswer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            handleTriviaCompletion();
        }
    };

    const handleTriviaCompletion = () => {
        setTriviaCompleted(true);
    };

    const showFeedback = (message) => {
        setFeedbackMessage(message);
        setFeedbackVisible(true);
        setTimeout(() => {
            setFeedbackVisible(false);
        }, 3500);
    };

    const closeModal = () => {
        setTriviaCompleted(false);
        navigation.navigate('HomeNiños');
        setCurrentQuestion(0);
        setScore(0);
    };

    if (!Module || !Module.id || !questions.length) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Cargando...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={feedbackVisible}
                onRequestClose={() => {
                    setFeedbackVisible(false);
                }}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.feedbackText}>{feedbackMessage}</Text>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={triviaCompleted}
                onRequestClose={() => {
                    setTriviaCompleted(false);
                }}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.feedbackText}>Trivia completada</Text>
                        <TouchableOpacity style={styles.button} onPress={closeModal}>
                            <Text style={styles.buttonText}>Volver a Homeniños</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {currentQuestion < questions.length ? (
                <>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText1}>{questions[currentQuestion].question}</Text>
                    </View>
                    <View style={styles.optionsContainer}>
                        {questions[currentQuestion].options.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.optionButton}
                                onPress={() => handleAnswer(option)}
                            >
                                <Text style={styles.optionText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </>
            ) : (
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>Trivia completada. Puntuación: {score}/{questions.length}</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colores.azulclaro,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    },
    questionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        padding: 20,
    },
    questionText1: {
        paddingTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    optionsContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    optionButton: {
        backgroundColor: Colores.azuloscuro,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
        color: Colores.blanco
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 10,
        elevation: 5,
        alignItems: 'center',
    },
    feedbackText: {
        fontSize: 18,
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        backgroundColor: Colores.verde,
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: Colores.negro,
        fontSize: 18,
        textAlign: 'center',
    },
});

export default TriviaNiños;

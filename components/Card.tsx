import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Card = ({ card, hideNumber = false }) => {
    const { text, number } = card;
 
    return (
        <View style={styles.card}>
            <Text>{text}</Text>
            {!hideNumber &&
                <Text>{number}</Text>
            }
        </View>
    );
 }

const styles = StyleSheet.create({
    card: {
        
    },
});
 
 export default Card;
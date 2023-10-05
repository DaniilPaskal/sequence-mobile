import { StyleSheet, Text, View } from "react-native";
import { shuffleArray } from "../components/Functions";
import Card from "../components/Card";

const GameBoard = () => {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default GameBoard;
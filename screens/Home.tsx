import { Pressable, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";

type HomeProps = NativeStackScreenProps<RootStackParamList>;

const Home = ({ navigation }: HomeProps) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('GameBoard')}>
                <Text>Start Game</Text>
            </Pressable>
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
    button: {

    }
});

export default Home;
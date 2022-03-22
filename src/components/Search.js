import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { elevation } from "../common/styles"

export default function Search({setTerm}) {

    const [input, setInput] = useState("");
    
    const handleEndEditing = () => {
        if(!input) return;

        setTerm(input);
    }

    return(
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name="search" size={25} style={{margin:12}}/>
            <TextInput
                placeholder="Restaurants, food"
                onChangeText={(text) => setInput(text)}
                onEndEditing={handleEndEditing}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    //    marginTop: 5,
        backgroundColor: "white",
        padding:10,
        borderRadius: 30
    },
    elevation
})
import { StyleSheet, Text, View } from "react-native"
import yelp from "../api/yelp"

export default function Restaurants() {
   
    const searcRestarurants = async () => {
        const response = await yelp.get("/search", {
            params: {
                limit:15,
                term:"Desert",
                location:"Toronto"
             }
        })
        console.log(response);
    }
    searcRestarurants();
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Top Restaurants</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        marginHorizontal: 25,
        marginVertical: 15,
        flex: 1
    },
    header: {
        fontWeight: "bold",
    }
})
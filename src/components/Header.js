import {View, Text, StyleSheet} from "react-native"


export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.lightHeader}>Grab your</Text>
            <Text style={styles.boldHeader}>Delicous meal!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:50,
        paddingHorizontal:25,
        backgroundColor: '#e8e8e8',
        paddingBottom:18
    },
    lightHeader : {
        fontSize:35,
        marginHorizontal: 25,
        marginBottom: -10
    },
    boldHeader : {
        fontSize:40,
        fontWeight: 'bold',
        marginHorizontal: 25
    }

})
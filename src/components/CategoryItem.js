import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {elevation} from "../common/styles/";

export default function CategoryItem({name, imageUrl, active, handlePress}) {
    
  return (
    <TouchableOpacity onPress={() => handlePress()}>
        <View style={[styles.container, styles.elevation, active ? {backgroundColor: "rgb(241,186,84)"} : {backgroundColor: "white"}]}>
            <View style={styles.imageContainer}>
                <Image source={imageUrl} style={styles.image} />
            </View>
            <Text style={styles.header}>
                {name}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical:15,
        backgroundColor: "white",
        alignItems:"center",
        justifyContent:"center",
      //  backgroundColor:"#ffd96f"
      marginRight:20
    },
    elevation,
    image:{
        width:35,
        height:35
    },
    imageContainer:{
        width: 50,
        height: 50,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:50,
        marginBottom:5
    },
    header: {
        fontWeight: "bold"
    }
})
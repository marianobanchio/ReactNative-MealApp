import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { useState  } from 'react';
import Search from './src/components/Search';
import Header from './src/components/Header';
import { Categories } from './src/components/Categories';
import Restaurants from './src/components/Restaurants';


export default function App() {
  
  const [term, setTerm] = useState("Burger");

  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./src/assets/images/burger.png")
    },
    {
      name: "Pizza",
      imageUrl: require("./src/assets/images/pizza.png")
    },
    {
      name: "Pasta",
      imageUrl: require("./src/assets/images/pasta.png")
    },
    {
      name: "Dessert",
      imageUrl: require("./src/assets/images/cake.png")
    },
    {
      name: "Drinks",
      imageUrl: require("./src/assets/images/smoothies.png")
    }
  ];

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.centerPadding}>
        <Search
          setTerm={setTerm}
        />
        <Categories 
          categories={commonCategories} 
          setTerm={setTerm}
          term={term}
        />
        <Restaurants/>
        <StatusBar/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  centerPadding: {
    padding:20
  }
});

import {FlatList} from 'react-native'
import CategoryItem from './CategoryItem';

export const Categories = ({categories, setTerm, term}) => {
  return (
    <FlatList 
        data={categories} 
        renderItem={({item, index}) => {
        return <CategoryItem 
            name={item.name} 
            imageUrl={item.imageUrl} 
            active={item.name === term}
            index={index}
            handlePress={() => setTerm(item.name)}
        
            />
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
    />
  )
}

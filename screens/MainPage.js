import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ListCategories from '../components/ListCategories';
import categories from '../data/categories';
import Modal from '../components/UI/Modal';

const MainPage = () => {
  const navigation = useNavigation();

  return (
    <>
      <View>
        <FlatList
          key={Math.random()}
          numColumns={2}
          data={categories}
          renderItem={(itemData) => {
            return (
              <ListCategories
                color={itemData.item.color}
                name={itemData.item.name}
                onPressHandler={() =>
                  navigation.navigate('CategoryMeal', {
                    name: itemData.item.name,
                    categoryId: itemData.item.id,
                  })
                }
              />
            );
          }}
        />
      </View>
      <Modal onPressHandler={() => navigation.navigate('Filters')} />
    </>
  );
};

const styles = StyleSheet.create({});

export default MainPage;

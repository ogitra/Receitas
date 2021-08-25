import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import CustomSwitch from '../components/CustomSwitch';
import { Colors } from '../defaultStyles/DefaultStyles';
import { filteredMeals } from '../store/actions/meals';

const Filters = () => {
  const [semGluten, setSemGlutem] = useState(false);
  const [semLactose, setSemLactose] = useState(false);
  const [vegano, setVegano] = useState(false);
  const [vegetariano, setVegetariano] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const filterHandler = () => {
    const filtered = { isGlutenFree: semGluten, isLactoseFree: semLactose, isVegan: vegano, isVegetarian: vegetariano };

    dispatch(filteredMeals(filtered));
    navigation.navigate('Receitas');
  };

  return (
    <>
      <Text style={styles.title}>Filtros de busca</Text>
      <View style={styles.switchContainer}>
        <CustomSwitch label='Sem Glúten' onChange={(value) => setSemGlutem(value)} value={semGluten} />
        <CustomSwitch label='Sem Lactose' onChange={(value) => setSemLactose(value)} value={semLactose} />
        <CustomSwitch label='Vegano' onChange={(value) => setVegano(value)} value={vegano} />
        <CustomSwitch label='Vegetariano' onChange={(value) => setVegetariano(value)} value={vegetariano} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={filterHandler}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={teste}>
          <Text style={styles.buttonText}>ENVIAR</Text>
        </TouchableOpacity>
      </View> */}
    </>
  );
};

export default Filters;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'openSansBold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  switchContainer: {
    paddingHorizontal: 50,
    marginBottom: 40,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.Primary,
    padding: 12,
    width: '30%',
  },
  buttonText: {
    fontFamily: 'openSansBold',
    color: 'white',
  },
});

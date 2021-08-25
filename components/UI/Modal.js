import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toogleModal } from '../../store/actions/meals';
import { Colors } from '../../defaultStyles/DefaultStyles';

const Modal = ({ onPressHandler }) => {
  const state = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();

  const closeModalHandler = () => dispatch(toogleModal());

  return (
    <TouchableWithoutFeedback onPress={closeModalHandler}>
      <View style={state ? styles.modalContainer : null}>
        <View style={styles.modal}>
          <Text style={styles.text}>Receitas</Text>
          <Text style={styles.text} onPress={onPressHandler}>
            Filtro
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    width: '100%',
    height: 800,
    position: 'absolute',
    left: 0,
    zIndex: 10,
  },
  modal: {
    width: 180,
    backgroundColor: 'white',
    height: 800,
    padding: 10,
  },
  text: {
    fontFamily: 'openSansBold',
    color: Colors.Primary,
    fontSize: 16,
    marginVertical: 8,
  },
});

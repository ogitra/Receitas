import { TOOGLE_MODAL } from '../actions/meals';

const initialState = {
  modal: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_MODAL:
      return { modal: !state.modal };

    default:
      return state;
  }
};

export default modalReducer;

import reduxCrud from 'redux-crud';

const baseReducers = reduxCrud.Map.reducersFor('displayMenu');
const initialState = {};

export default function allergens(state = initialState, action) {
  switch (action.type) {
    default:
      return baseReducers(state, action);
  }
}
import React from 'react'

const Inventorymanagement = (state = [], action) => {

  switch (action.type) {

    case 'ADD_PRODUCT':

      state.push(action.value)
      return [...state];
    case 'EDIT_PRODUCT':

      return state;

    case 'DELETE_PRODUCT':

      return state;

    case 'DELETE_MULTIPLE_PRODUCT':

      return state;


    default:

      return state;
  }

}

export default Inventorymanagement;
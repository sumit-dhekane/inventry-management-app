

export const addProduct = (product) => dispatch => {
    dispatch({ type: 'ADD_PRODUCT', value: product })

}
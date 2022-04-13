import { createStore } from 'redux';
import Inventorymanagement from './reducers/Inventorymanagement';


const store = createStore(Inventorymanagement)


export default store;
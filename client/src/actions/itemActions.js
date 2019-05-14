import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
import axios from "axios";

// Get Items:
export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get("/api/items")
      .then(res => dispatch({
        type: GET_ITEMS,
        payload: res.data
      }))
};

// Delete Item:
export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
};

// Add Item:
export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    };
};

// Loading Animation:
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}
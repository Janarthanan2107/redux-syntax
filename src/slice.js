import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productItems: [],
  message: "Hi how many products do you have ?",
};

export const fetchProducts = createAsyncThunk(
  "data/fetchProducts", // action prefix for a reducer
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const productSlice = createSlice({
  //name of the slice
  name: "products",
  //declaring the initial state
  initialState,
  //defining the reducers for declaring fuctions
  reducer: {},
  //defining the extraReducers for handling async actions
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.productItems = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default productSlice.reducer;

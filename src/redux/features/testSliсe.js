import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  tests: [],
  loading: false,
  error: false,
  indexTest: -1,
};

export const getTests = createAsyncThunk(
  "tests/getTests",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      "https://63230e9ea624bced3085a5f6.mockapi.io/quiz"
    );
    dispatch(setTests(res.data));
  }
);

export const testSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    setTests: (state, action) => {
      state.tests = action.payload;
    },
    setIndexTest: (state, action) => {
      state.indexTest = action.payload;
    },
  },
  extraReducers: {
    [getTests.pending]: (state) => {
      state.error = false;
      state.loading = true;
    },
    [getTests.fulfilled]: (state) => {
      state.loading = false;
    },
    [getTests.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { setTests, setIndexTest } = testSlice.actions;
export default testSlice.reducer;

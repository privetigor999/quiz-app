import { configureStore } from "@reduxjs/toolkit";
import testSliсe from "../features/testSliсe";
export const store = configureStore({
  reducer: { tests: testSliсe },
});

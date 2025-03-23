import { configureStore } from "@reduxjs/toolkit";
import allCourseSlice from "../features/AllCourseSlice";
import testimonialsSlice from "../features/testimonialsSlice";
import DashBoardSlice from "../features/DashBoardSlice";

const store = configureStore({
  reducer: {
    allCourse: allCourseSlice,
    testimonials: testimonialsSlice,
    dashboard: DashBoardSlice,
  },
});

export default store;

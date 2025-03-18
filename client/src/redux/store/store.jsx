import { configureStore } from "@reduxjs/toolkit";
import allCourseSlice from "../features/AllCourseSlice";
import testimonialsSlice from "../features/testimonialsSlice";

const store = configureStore({
  reducer: {
    allCourse: allCourseSlice,
    testimonials: testimonialsSlice,
  },
});

export default store;

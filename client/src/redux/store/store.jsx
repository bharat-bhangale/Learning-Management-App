import { configureStore } from "@reduxjs/toolkit";
import allCourseSlice from "../features/allCourseSlice";

const store = configureStore({
    reducer: {
        allCourse: allCourseSlice,
    },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import allCourseSlice from "../features/AllCourseSlice";

const store = configureStore({
    reducer: {
        allCourse: allCourseSlice,
    },
});

export default store;

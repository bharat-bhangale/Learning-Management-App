import { configureStore } from "@reduxjs/toolkit";
import allCourseSlice from "../features/AllCourseSlice";
import testimonialsSlice from "../features/testimonialsSlice";
import DashBoardSlice from "../features/DashBoardSlice";
import EnrolledStudentSlice from "../features/EnrolledStudentSlice";

const store = configureStore({
  reducer: {
    allCourse: allCourseSlice,
    testimonials: testimonialsSlice,
    dashboard: DashBoardSlice,
    enrolledStudents: EnrolledStudentSlice,
  },
});

export default store;

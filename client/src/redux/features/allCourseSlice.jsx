import { createSlice } from "@reduxjs/toolkit";
import { dummyCourses } from "../../assets/assets";

const initialState = {
    allCourse: [],
};

const allCourseSlice = createSlice({
    name: "allCourse",
    initialState,
    reducers: {
        setAllCourse: (state) => {
            state.allCourse = dummyCourses;
        },
    },
});

export const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
        return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
        totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
};

export const { setAllCourse } = allCourseSlice.actions;
export default allCourseSlice.reducer;

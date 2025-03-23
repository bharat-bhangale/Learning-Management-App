import { createSlice } from "@reduxjs/toolkit";
import { dummyStudentEnrolled } from "../../assets/assets";

const initialState = {
    enrolledStudents: [],
};

const enrolledStudentSlice = createSlice({
    name: "enrolledStudents",
    initialState,
    reducers: {
        setEnrolledStudents: (state, action) => {
            state.enrolledStudents = dummyStudentEnrolled;
        },
    },
});

export const { setEnrolledStudents } = enrolledStudentSlice.actions;
export default enrolledStudentSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { dummyTestimonial } from "../../assets/assets";

const initialState = {
    testimonials: [],
};

const testimonialsSlice = createSlice({
    name: "testimonials",
    initialState,
    reducers: {
        setTestimonials: (state) => {
            state.testimonials = dummyTestimonial;
        },
    },
});

export const { setTestimonials } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { dummyDashboardData } from "../../assets/assets";

const initialState = {
    dashboardData: [],
};

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setDashboardData: (state) => {
            state.dashboardData = dummyDashboardData;
        },
    },
});

export const { setDashboardData } = dashboardSlice.actions;
export default dashboardSlice.reducer;

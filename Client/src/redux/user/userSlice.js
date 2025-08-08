import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: null,   // store error message or null if no error
};

const userSlice = createSlice({
    name: "user",   
    initialState,
    reducers: { 
        signInStart: (state) => {
            state.loading = true;
            state.error = null;  // clear error on new sign-in attempt
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;  // store the error message string here
        },  
    }
});      

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;

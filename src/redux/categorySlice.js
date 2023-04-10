import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice({
    name: "category",
    initialState:{
        title:'',
        description:'',
        featureImag:'',
    },
    reducers: {
        setCategory(state, action){
            state.title = action.payload;
            state.description = action.payload;
            state.featureImag = action.payload;
        },
        
    }
});
export const {setCategory} = categorySlice.actions;
export default categorySlice.reducer;
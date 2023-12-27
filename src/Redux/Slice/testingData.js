import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value: {},   
}
export const testingData = createSlice({
    name: 'test',
    initialState: initialState,
    reducers: {
        setTestData : (state , actions) =>{
            return {
                ...state , 
                value : actions.payload
            }
        }
    }
})

export const { setTestData } = testingData.actions

export default testingData.reducer
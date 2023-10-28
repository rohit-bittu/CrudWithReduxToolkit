import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: {
        items: []
    },
    reducers: {
        addPost: (state, action) => {
            console.log(action)
            state.items.push(action.payload)

        },
        deletePost: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        updatePost:(state,action)=> {
            state.items.map((item)=> {
                if (item.id == action.payload.id) {
                    item.title = action.payload.title
                    item.Description = action.payload.Description
                }
            })
        }
    }
})

export const { addPost , deletePost , updatePost} = postSlice.actions
export default postSlice.reducer
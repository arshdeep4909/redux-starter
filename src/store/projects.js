import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const slice = createSlice({
  name: "projects",
  initialState: [{ id: 1, name: "Project 1" }],
  reducers: {
    //action => action Handler
    projectAdded: (projects, action) => {
      projects.push({
        id: lastId++,
        name: action.payload.name,
      });
    },
  },
});

export const { projectAdded } = slice.actions;
export default slice.reducer;

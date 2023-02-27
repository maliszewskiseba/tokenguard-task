import { createSlice } from "@reduxjs/toolkit";

const graphsSlice = createSlice({
  name: "graphs",
  initialState: {
    graphs: [],
  },
  reducers: {
    storeGraphData: (state: any, payload: any) => {
      state.graphs = [...state.graphs, payload];
    },
  },
});

export const { storeGraphData } = graphsSlice.actions;

export default graphsSlice.reducer;

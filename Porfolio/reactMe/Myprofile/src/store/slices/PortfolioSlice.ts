import { portfolio } from "@/types/portfolio.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { server } from "../../utils/constants";
import { RootState } from "../store";
import { httpClient } from "../../utils/HttpClient";

export interface PortfolioState {
  portfolioAllResult: portfolio[];
  portfolioOneResult: portfolio | null;
}

const initialState: PortfolioState = {
  portfolioAllResult: [],
  portfolioOneResult: null,
};

// Add
export const addPortfolio = createAsyncThunk(
  "portfolio/add",
  async (formData: FormData) => {
    await httpClient.post(server.PORTFOLIO_URL, formData);
  }
);

// Query
export const getportfolio = createAsyncThunk(
  "portfolio/getAll",
  async (keyword: string): Promise<portfolio[]> => {
    // debugger;

    if (keyword) {
      const result = await httpClient.get<portfolio[]>(
        `${server.PORTFOLIO_URL}/search/name?keyword=${keyword}`
      );
      return result.data;
    } else {
      const result = await httpClient.get<portfolio[]>(server.PORTFOLIO_URL);
      return result.data;
    }
  }
);

// Query by Id
export const getportfolioById = createAsyncThunk(
  "portfolio/getById",
  async (id: string): Promise<portfolio> => {
    const result = await await httpClient.get(`${server.PORTFOLIO_URL}/${id}`);
    return result.data;
  }
);

// Delete
export const deletePortfolio = createAsyncThunk(
  "portfolio/delete",
  async (id: string) => {
    await httpClient.delete(`${server.PORTFOLIO_URL}/${id}`);
  }
);

// Edit
export const editPortfolio = createAsyncThunk(
  "portfolio/edit",
  async (formData: any) => {
    await httpClient.put(server.PORTFOLIO_URL, formData);
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getProdcut
    builder.addCase(getportfolio.fulfilled, (state, action) => {
      state.portfolioAllResult = action.payload;
    });

    // getProductById
    builder.addCase(getportfolioById.fulfilled, (state, action) => {
      state.portfolioOneResult = action.payload;
    });
  },
});

export const PortfolioSelector = (store: RootState): PortfolioState =>
  store.PortfolioReducer;
export default portfolioSlice.reducer;

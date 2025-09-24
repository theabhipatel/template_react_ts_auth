import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { authThunks } from "./authApi";
import type { IAuthResponse } from "./authApi";

interface IInitialState {
  user: IAuthResponse["user"] | null;
  status: Record<string, "idle" | "loading" | "succeeded" | "failed">;
  error: Record<string, string | null>;
}

const savedUser = localStorage.getItem("user");

const initialState: IInitialState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  status: {},
  error: {},
};

const addThunkCases = <T>(
  builder: any,
  thunk: any,
  name: string,
  onFulfilled?: (state: IInitialState, action: PayloadAction<T>) => void
) => {
  builder
    .addCase(thunk.pending, (state: IInitialState) => {
      state.status[name] = "loading";
      state.error[name] = null;
    })
    .addCase(thunk.fulfilled, (state: IInitialState, action: PayloadAction<T>) => {
      state.status[name] = "succeeded";
      if (onFulfilled) onFulfilled(state, action);
    })
    .addCase(thunk.rejected, (state: IInitialState, action: any) => {
      state.status[name] = "failed";
      state.error[name] = action.payload || action.error?.message || null;
    });
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    /** ---> Login */
    addThunkCases<IAuthResponse>(builder, authThunks.login, "login", (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    });

    /** ---> Signup */
    addThunkCases<IAuthResponse>(builder, authThunks.signup, "signup", (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    });

    /** ---> Logout */
    addThunkCases<{ message: string }>(builder, authThunks.logout, "logout", (state) => {
      state.user = null;
      localStorage.removeItem("user");
    });
  },
});

export const { clearAuth } = authSlice.actions;
export default authSlice.reducer;

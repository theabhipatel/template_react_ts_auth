import { axiosClient } from "@/utils/axiosClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

/** ---> Generic thunk function */
const createApiThunk = <Payload, Response>(
  name: string,
  buildRequest: (payload: Payload) => {
    url: string;
    method?: "get" | "post" | "put" | "delete";
    data?: unknown;
    config?: object;
  }
) =>
  createAsyncThunk<Response, Payload>(`auth/${name}`, async (payload, thunkAPI) => {
    try {
      const { url, method = "get", data, config } = buildRequest(payload);

      const res =
        method === "get"
          ? await axiosClient.get<Response>(url, config)
          : await axiosClient[method]<Response>(url, data, config);

      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || `Failed to ${name}`);
    }
  });

/** ---> Auth thunks APIs */
export interface IAuthResponse {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role?: string;
  };
}

export interface ILoginPayload {
  email: string;
  password: string;
}
export const login = createApiThunk<ILoginPayload, IAuthResponse>("login", (payload) => ({
  url: "/signin",
  method: "post",
  data: payload,
}));

export interface ISignupPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export const signup = createApiThunk<ISignupPayload, IAuthResponse>("signup", (payload) => ({
  url: "/signup",
  method: "post",
  data: payload,
}));

export const logout = createApiThunk<void, { message: string }>("logout", () => ({
  url: "/logout",
  method: "post",
}));

export const authThunks = { login, signup, logout };

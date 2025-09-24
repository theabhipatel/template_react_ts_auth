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
  createAsyncThunk<Response, Payload>(`users/${name}`, async (payload, thunkAPI) => {
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

/** ---> User types */
export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IUserListResponse {
  users: IUser[];
  total: number;
}

export interface ICreateUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: string;
}

export interface IUpdateUserPayload {
  id: string;
  data: Partial<Omit<IUser, "_id">>;
}

export interface IDeleteUserPayload {
  id: string;
}

/** ---> User thunks APIs */
export const fetchUsers = createApiThunk<void, IUserListResponse>("fetchUsers", () => ({
  url: "/users",
  method: "get",
}));

export const fetchUser = createApiThunk<{ id: string }, IUser>("fetchUser", (payload) => ({
  url: `/users/${payload.id}`,
  method: "get",
}));

export const createUser = createApiThunk<ICreateUserPayload, IUser>("createUser", (payload) => ({
  url: "/users",
  method: "post",
  data: payload,
}));

export const updateUser = createApiThunk<IUpdateUserPayload, IUser>("updateUser", (payload) => ({
  url: `/users/${payload.id}`,
  method: "put",
  data: payload.data,
}));

export const deleteUser = createApiThunk<IDeleteUserPayload, { message: string }>(
  "deleteUser",
  (payload) => ({
    url: `/users/${payload.id}`,
    method: "delete",
  })
);

export const userThunks = {
  fetchUsers,
  fetchUser,
  createUser,
  updateUser,
  deleteUser,
};

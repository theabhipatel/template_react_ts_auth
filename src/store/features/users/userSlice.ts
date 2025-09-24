import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { userThunks, type IUser, type IUserListResponse } from "./userApi";

/** ---> Initial State */
interface IInitialState {
  users: IUser[];
  selectedUser: IUser | null;
  status: Record<string, "idle" | "loading" | "succeeded" | "failed">;
  error: Record<string, string | null>;
}

const initialState: IInitialState = {
  users: [],
  selectedUser: null,
  status: {},
  error: {},
};

/** ---> Reusable thunk case handler */
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

/** ---> User Slice */
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearSelectedUser: (state) => {
      state.selectedUser = null;
    },
  },
  extraReducers: (builder) => {
    /** ---> Fetch Users */
    addThunkCases<IUserListResponse>(
      builder,
      userThunks.fetchUsers,
      "fetchUsers",
      (state, action) => {
        state.users = action.payload.users;
      }
    );

    /** ---> Fetch Single User */
    addThunkCases<IUser>(builder, userThunks.fetchUser, "fetchUser", (state, action) => {
      state.selectedUser = action.payload;
    });

    /** ---> Create User */
    addThunkCases<IUser>(builder, userThunks.createUser, "createUser", (state, action) => {
      state.users.push(action.payload);
    });

    /** ---> Update User */
    addThunkCases<IUser>(builder, userThunks.updateUser, "updateUser", (state, action) => {
      state.users = state.users.map((u) => (u._id === action.payload._id ? action.payload : u));
      if (state.selectedUser && state.selectedUser._id === action.payload._id) {
        state.selectedUser = action.payload;
      }
    });

    /** ---> Delete User */
    addThunkCases<{ message: string }>(
      builder,
      userThunks.deleteUser,
      "deleteUser",
      (state, action) => {
        // action.meta.arg contains the payload passed to deleteUser
        const deletedId = (action.meta.arg as { id: string }).id;
        state.users = state.users.filter((u) => u._id !== deletedId);
        if (state.selectedUser?._id === deletedId) {
          state.selectedUser = null;
        }
      }
    );
  },
});

export const { clearSelectedUser } = userSlice.actions;
export default userSlice.reducer;

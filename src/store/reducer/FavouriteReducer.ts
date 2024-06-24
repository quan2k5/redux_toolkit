import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialUsers = [
    {
        id: 1,
        userName: 'Nguyễn Văn A',
        favourites: true,
    },
    {
        id: 2,
        userName: 'Nguyễn Văn B',
        favourites: false,
    },
    {
        id: 3,
        userName: 'Nguyễn Văn C',
        favourites: true,
    },
    {
        id: 4,
        userName: 'Nguyễn Văn D',
        favourites: true,
    }
];

const reducerUsers = createSlice({
    name: "Users",
    initialState: initialUsers,
    reducers: {
        handleFavourite: (state, action: PayloadAction<number>) => {
            return state.map((user) =>
                user.id === action.payload
                    ? { ...user, favourites: !user.favourites }
                    : user
            );
        },
    },
});

export const { handleFavourite } = reducerUsers.actions;
export default reducerUsers.reducer;

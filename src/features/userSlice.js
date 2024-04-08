import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    user: {},
    teams: {},
    social : []
}

export const usersAuth = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        fetchUser: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.user = {
                name: action.payload.user.name,
                email: action.payload.user.email,
                teamId: action.payload.user.teamId,
            };
        
            state.teams = action.payload.teamId;
        },
        setSocial : (state,action) => {
            state.social.push(action.payload.social)
        }
    }
})

export const { fetchUser, setSocial } = usersAuth.actions;

export default usersAuth.reducer
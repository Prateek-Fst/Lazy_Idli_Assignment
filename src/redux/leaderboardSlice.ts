import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Score {
    username: string;
    time: string;
    amount: string;
}
interface LeaderboardState {
    scores: Score[];
}
const initialState: LeaderboardState = {
    scores: [
        { username: 'Anjum', time: '00:56:23', amount: '₹50000' },
        { username: 'Pragati Azad', time: '00:56:23', amount: '₹5000' },
        { username: 'Pragati Azad', time: '00:56:23', amount: '₹500' },
    ],
};
const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {
        addScore: (state, action: PayloadAction<Score>) => {
            state.scores.push(action.payload);
            state.scores.sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
            if (state.scores.length > 10) {
                state.scores.pop();
            }
        },
    },
});
export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;

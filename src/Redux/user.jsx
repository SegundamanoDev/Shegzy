const {createAsyncThunk, createSlice} = require("@reduxjs/toolkit");
const {default: axios} = require("axios");

const signUp = createAsyncThunk(
	"auth/signUp",
	async (user, {rejectWithValue}) => {
		try {
			const {data} = await axios.post(
				"https://localhost:3000/signUp",
				JSON.stringify(user)
			);
			return data;
		} catch (error) {
			rejectWithValue(data);
		}
	}
);

const initialState = {
	user: null,
	isSuccess: false,
	isPending: false,
	error: false,
};
const userSlice = createSlice({
	name: "auth",
	initialState,

	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(signUp.fulfilled, (state, action) => {
			(state.user = action.payload),
				(state.isSuccess = true),
				(state.isPending = false),
				(state.error = false);
		});
		builder.addCase(signUp.pending, (state, action) => {
			(state.isPending = true),
				(state.error = false),
				(state.isSuccess = false);
		});
		builder.addCase(signUp.rejected, (state, action) => {
			(state.error = action.payload),
				(state.isPending = false),
				(state.isSuccess = false);
		});
	},
});
export default userSlice.reducer;

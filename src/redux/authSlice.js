import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase'; // Adjust the import path as necessary

// Async Thunk for user signup
export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async ({ first, last, email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user) {
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          firstname: first,
          lastname: last
        });
      }
      return { uid: user.uid, email: user.email, firstname: first, lastname: last };
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        return rejectWithValue('Email already in use. Please use a different email.');
      }
      return rejectWithValue('An error occurred. Please try again.');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
    successMessage: '',
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccessMessage: (state) => {
      state.successMessage = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.successMessage = 'Account created successfully! Now you can log in.';
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearError, clearSuccessMessage } = authSlice.actions;
export default authSlice.reducer;

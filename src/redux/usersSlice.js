// src/features/users/usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchUsersByDate = createAsyncThunk(
  'users/fetchUsersByDate',
  async () => {
    try {
      const usersCollection = collection(db, 'users');
      const q = query(usersCollection, orderBy('createdAt', 'desc'));
      const userSnapshot = await getDocs(q);
      return userSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error('Error fetching users:', error);
      throw Error('Failed to fetch users: ' + error.message);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
    userCount: 0,
  },
  reducers: {
    clearError: (state) => {
      state.error = null; // Clear error state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersByDate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersByDate.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.userCount = action.payload.length; // Set user count
      })
      .addCase(fetchUsersByDate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the action to clear error
export const { clearError } = usersSlice.actions;

// Selectors
export const selectUsers = (state) => state.users.users;
export const selectUserCount = (state) => state.users.userCount;

export default usersSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import projectReducer from '../features/projects/projectSlice';
import taskReducer from '../features/tasks/taskSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    projects: projectReducer,
    tasks: taskReducer,
  },
});

// Inferir los tipos de RootState y AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

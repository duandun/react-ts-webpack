
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ComponentState {
    cmpName: string;
}

const initialState: ComponentState = {
    cmpName: '',
};

export const componentSlice = createSlice({
    name: 'cmp',
    initialState,
    reducers: {
        createCustomComponent: (state, action: PayloadAction<ComponentState>) => {
            state.cmpName = action.payload.cmpName;
        }
    },
});

export const { createCustomComponent } = componentSlice.actions;

export default componentSlice.reducer;
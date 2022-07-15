import { createSlice } from '@reduxjs/toolkit'

const sakurazakaSlice = createSlice({
  name: 'sakurazaka',
  initialState: {
    list: []
  },
  reducers: {
    addList: (state, action) => {
      state.list = action.payload
    }
  }
})

export default sakurazakaSlice.reducer

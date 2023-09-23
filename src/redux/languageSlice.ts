import { createSlice } from '@reduxjs/toolkit';

interface LanguageState {
  language: string,
  languageList: { name: string, code: string }[]
}

const initialState: LanguageState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" }]
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    change: (state, { payload }) => {
      state.language = payload.value
    }
  }
})

export const { change } = languageSlice.actions

export default languageSlice.reducer
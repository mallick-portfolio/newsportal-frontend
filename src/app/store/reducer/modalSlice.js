import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showCreateCategoryModal: false,
    showCreateNewsModal: false,
  },
  reducers: {
    setShowCreateCategoryModal(state, action) {
      state.showCreateCategoryModal = action.payload;
    },
    setShowCreateNewsModal(state, action) {
      state.showCreateNewsModal = action.payload;
    },
  },
});

export const { setShowCreateCategoryModal, setShowCreateNewsModal } =
  modalSlice.actions;
export default modalSlice.reducer;

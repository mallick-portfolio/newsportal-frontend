import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showCreateCategoryModal: false,
    showDeleteCategoryModal: false,
    showCreateNewsModal: false,
    selectedObj: null,
  },
  reducers: {
    setShowCreateCategoryModal(state, action) {
      state.showCreateCategoryModal = action.payload;
    },
    setShowCreateNewsModal(state, action) {
      state.showCreateNewsModal = action.payload;
    },
    setShowDeleteCategoryModal(state, action) {
      state.showDeleteCategoryModal = action.payload;
    },
    setSelectedObj(state, action) {
      state.selectedObj = action.payload;
    },
  },
});

export const {
  setShowCreateCategoryModal,
  setShowCreateNewsModal,
  setShowDeleteCategoryModal,
  setSelectedObj,
} = modalSlice.actions;
export default modalSlice.reducer;

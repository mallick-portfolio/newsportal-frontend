import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedObj,
  setShowDeleteCategoryModal,
} from "@/app/store/reducer/modalSlice";
import { useDeleteCategoryMutation } from "@/app/store/api/newsApi";
import { toast } from "react-toastify";

export default function DeleteCategory() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { showDeleteCategoryModal, selectedObj } = useSelector(
    (state) => state.modal
  );

  // api call
  const [handleDeleteCategory, { data, isLoading, status }] =
    useDeleteCategoryMutation();
  console.log(status);

  // api response
  useEffect(() => {
    if (data && data?.success) {
      toast.success(data?.message);
      dispatch(setSelectedObj(null));
      dispatch(setShowDeleteCategoryModal(false));
      onOpenChange(false);
    } else if (!data && status === "rejected") {
      toast.error("Title already exsit with this name!!!");
    }
  }, [data]);

  useEffect(() => {
    if (showDeleteCategoryModal) {
      onOpen();
    }
  }, [showDeleteCategoryModal]);

  useEffect(() => {
    dispatch(setShowDeleteCategoryModal(isOpen));
  }, [isOpen]);

  const handleDelete = () => {
    handleDeleteCategory(selectedObj?.id);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        backdrop="opaque"
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add New Category
              </ModalHeader>
              <ModalBody>
                <p>Are you sure want to delete {selectedObj?.name} category</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  isLoading={isLoading}
                  color="danger"
                  onPress={handleDelete}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

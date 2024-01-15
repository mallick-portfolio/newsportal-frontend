import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { setShowCreateCategoryModal } from "@/app/store/reducer/modalSlice";
import { useAddCategoryMutation } from "@/app/store/api/newsApi";
import { toast } from "react-toastify";

export default function CreateCategory() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { showCreateCategoryModal } = useSelector((state) => state.modal);

  // api call
  const [handleAdd, { data, isLoading, status }] = useAddCategoryMutation();
  console.log(status);

  // api response
  useEffect(() => {
    if (data && data?.success) {
      toast.success(data?.message);
      setTitle("");
      onOpenChange(false);
    } else if (!data && status === "rejected") {
      toast.error("Title already exsit with this name!!!");
    }
  }, [data]);

  useEffect(() => {
    if (showCreateCategoryModal) {
      onOpen();
    }
  }, [showCreateCategoryModal]);

  useEffect(() => {
    dispatch(setShowCreateCategoryModal(isOpen));
  }, [isOpen]);

  const handleAddTitle = () => {
    if (title && title !== "") {
      const data = {
        name: title,
      };
      handleAdd(data);
    }
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
                <Input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  autoFocus
                  label="Title"
                  placeholder="Enter your category title"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  isLoading={isLoading}
                  color="primary"
                  onPress={handleAddTitle}
                >
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

"use client";
import { useGetCategoriesQuery } from "@/app/store/api/newsApi";
import {
  Button,
  Card,
  CardBody,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import React from "react";
import { GoPlus } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setShowCreateNewsModal } from "@/app/store/reducer/modalSlice";
import CreateNews from "@/app/components/modal/CreateNews";

const NewsPage = () => {
  const dispatch = useDispatch();
  // api call
  const { data, isLoading } = useGetCategoriesQuery();

  console.log("data");
  let tableRow;
  if (data?.data && data?.data?.length) {
    tableRow = data?.data?.map((row) => (
      <TableRow key={row.div}>
        <TableCell>{row?.id}</TableCell>
        <TableCell>{row?.name}</TableCell>
        <TableCell>{row?.slug}</TableCell>
        <TableCell>
          <div className=" flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FaRegEye />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FaRegEdit />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <MdDeleteOutline />
              </span>
            </Tooltip>
          </div>
        </TableCell>
      </TableRow>
    ));
  }
  return (
    <div className="pr-6 ">
      <Card>
        <CardBody>
          <div className="flex w-full justify-end">
            <Button
              onClick={() => dispatch(setShowCreateNewsModal(true))}
              variant="solid"
              color="primary"
              startContent={<GoPlus className="text-lg" />}
              radius="md"
            >
              Add News
            </Button>
          </div>
          <div>
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Id</TableColumn>
                <TableColumn>Title</TableColumn>
                <TableColumn>Slug</TableColumn>
                <TableColumn>Action</TableColumn>
              </TableHeader>
              <TableBody loadingContent={<Spinner />} loadingState={isLoading}>
                {tableRow}
              </TableBody>
            </Table>
          </div>
        </CardBody>
      </Card>
      <CreateNews />
    </div>
  );
};

export default NewsPage;

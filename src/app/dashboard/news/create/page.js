"use client";

import { BreadcrumbItem, Breadcrumbs, Card, CardBody } from "@nextui-org/react";

const NewsPage = () => {
  // Editor ref

  return (
    <div className="pr-6 ">
      <Card>
        <CardBody>
          <Breadcrumbs variant="solid">
            <BreadcrumbItem>Dashboard</BreadcrumbItem>
            <BreadcrumbItem>News</BreadcrumbItem>
            <BreadcrumbItem>Create</BreadcrumbItem>
          </Breadcrumbs>
          <div className="flex w-full justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold text-primary-500">
                Create new post
              </h4>
            </div>
          </div>
          <div className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            provident aperiam earum debitis alias dolor voluptates neque, in
            aliquid, omnis recusandae quo impedit rem totam ipsum ad modi!
            Natus, amet!
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default NewsPage;

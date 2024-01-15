"use client";
import React from "react";
import { Card, CardBody, Image, Tabs, Tab, Chip } from "@nextui-org/react";
const BannerNews = () => {
  return (
    <div className="container my-12">
      <div className="flex flex-row gap-6">
        <div className="w-3/5">
          <Card>
            <CardBody>
              <div className="flex justify-center">
                <Image
                  isZoomed
                  width={0}
                  className="w-full"
                  alt="NextUI Fruit Image with Zoom"
                  src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                />
              </div>
              <h1 className="text-4xl my-5 font-semibold">
                Make beautiful websites regardless of your design experience.
              </h1>
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="flex w-2/5 flex-col">
          <Tabs aria-label="Options">
            <Tab key="photos" title="Photos">
              <Card>
                <CardBody>
                  <div className="flex gap-5">
                    <div>
                      <Image
                        isZoomed
                        width={0}
                        className="w-full"
                        alt="NextUI Fruit Image with Zoom"
                        src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                      />
                    </div>
                    <div>
                      <Chip radius="md" color="primary" size="sm">
                        Chip
                      </Chip>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="music" title="Music">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="videos" title="Videos">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default BannerNews;

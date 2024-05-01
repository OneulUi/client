import React from "react";
import Uploady from "@rpldy/uploady";

const filterBySize = (file: any) => {
  //filter out images larger than 5MB
  return file.size <= 5242880;
};

const App = () => (
  <Uploady
    destination={{ url: "my-server.com/upload" }}
    fileFilter={filterBySize}
    accept="image/*"
    method="POST"
  ></Uploady>
);

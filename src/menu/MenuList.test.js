import React from "react";
import { render } from "@testing-library/react";
import MenuList from "./MenuList";


import NoodleHutApi from "../api/api";

const token = NoodleHutApi.token;

it("renders without crashing", () => {
  render(
          <MenuList />
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(

          <MenuList />
  );
  expect(asFragment()).toMatchSnapshot();
});
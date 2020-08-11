import React from "react";

import { render } from "@testing-library/react";

import Home from "../";

describe("<Home />", () => {
  it("should render", () => {
    const { baseElement } = render(<Home />);

    expect(baseElement).toBeInTheDocument();
  });
});

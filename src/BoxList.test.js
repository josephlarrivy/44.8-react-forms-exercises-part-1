import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
    render(<BoxList />);
});

test('if a box can be added', function() {
    const boxList = render(<BoxList />);

    expect(boxList.getAllByDisplayValue()).toHaveLength(1);

});
import React from "react";
import BookClubCard from "../Components/BookClubCard";
import {
  render,
  cleanup,
} from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);
test("Renders props successfully", () => {
  const testProps = {
    name: "Test Title",
    currentBookImage: "",
    members: ["Dell", "Ambrose", "Takeshi"]
  };
  const { getByText, queryByTestId } = render(
    <BookClubCard
      name={testProps.name}
      currentBookImage={testProps.currentBookImage}
      members={testProps.members}
    />
  );
  expect(queryByTestId("club-title")).toBeInTheDocument();
  expect(queryByTestId("club-title")).toHaveTextContent("Test Title");
  expect(getByText("Members"));
});
test("Renders Members Properly", () => {
  const testProps = {
    name: "Test Title",
    currentBookImage: "",
    members: ["Dell", "Ambrose", "Takeshi"]
  };
  const { queryAllByTestId, getByTestId } = render(
    <BookClubCard
      name={testProps.name}
      currentBookImage={testProps.currentBookImage}
      members={testProps.members}
    />
  );
  const button = getByTestId("members-button");
  expect(queryAllByTestId("member")).toHaveLength(3);
});

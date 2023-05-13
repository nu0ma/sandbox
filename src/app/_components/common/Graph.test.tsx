import { composeStories } from "@storybook/react";
import * as stories from "./Graph.stories";
import { render, screen } from "@testing-library/react";

const { Default } = composeStories(stories);

describe("Graph", () => {
  test("Default", () => {
    render(<Default />);
    expect(screen.getByRole("img", { name: "Graph" })).toBeInTheDocument();
  });
});

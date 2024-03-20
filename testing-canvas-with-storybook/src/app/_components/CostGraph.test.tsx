import { composeStories } from "@storybook/react";
import * as stories from "./CostGraph.stories";
import { render, screen } from "@testing-library/react";

const { Default } = composeStories(stories);

describe("CostGraph", () => {
  test("Default", () => {
    render(<Default />);
    expect(screen.getByRole("img", { name: "Graph" })).toBeInTheDocument();
  });
});

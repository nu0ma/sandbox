import { Graph } from "./Graph";
import type { Meta } from "@storybook/react";

export default {
  component: Graph,
  title: "Graph",
  args: {
    data: [10, 11, 12, 13, 14, 15, 16],
  },
} as Meta<typeof Graph>;

export const Default = {};

import { CostGraph } from "./_components/CostGraph";
import { Graph } from "./_components/common/Graph";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CostGraph />
    </main>
  );
}

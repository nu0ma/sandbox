import { Menu } from '@/types/menu';

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

// const data = [
//   { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
//   { name: 'Page A', uv: 500, pv: 2400, amt: 2400 },
//   { name: 'Page A', uv: 200, pv: 2400, amt: 2400 },
//   { name: 'Page A', uv: 100, pv: 2400, amt: 2400 },
// ];

type Props = {
  result: Menu[];
};

export const ResultGraph = (props: Props) => {
  return (
    <>
      <LineChart width={400} height={400} data={props.result}>
        <Line type="monotone" dataKey="weight" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="createdAt" />
        <YAxis />
      </LineChart>
    </>
  );
};

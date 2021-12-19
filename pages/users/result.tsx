import { ResultGraph } from '@/components/Result/ResultGraph';
import { useAuth } from '@/context/useAuth';
import { getMenuByUserId } from '@/lib/db';
import { useQuery } from 'react-query';

const Result = () => {
  const { user } = useAuth();

  const { data } = useQuery(
    ['todos', user?.uid],
    () => getMenuByUserId(user!.uid),
    {
      enabled: !!user,
    }
  );

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      {/* イメージとしてはいくつかのグラフが並んでいるイメージ */}
      <div>全体の結果を見る + 特定の種目</div>
      <ResultGraph result={data} />
    </div>
  );
};

export default Result;

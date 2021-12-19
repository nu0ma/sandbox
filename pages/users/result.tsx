import { ResultGraph } from '@/components/Result/ResultGraph';
import { useAuth } from '@/context/useAuth';
import { getMenuByUserId } from '@/lib/db';
import { useEffect } from 'react';

const Result = () => {
  const { user } = useAuth();
  const test = async () => {
    if (!user) return;
    const res = await getMenuByUserId(user.uid);
    console.log(res);
  };
  useEffect(() => {
    test();
  }, [user]);
  // const res = getMenuResult(user.uid);
  return (
    <div>
      {/* イメージとしてはいくつかのグラフが並んでいるイメージ */}
      <div>全体の結果を見る + 特定の種目</div>
      <ResultGraph />
    </div>
  );
};

export default Result;

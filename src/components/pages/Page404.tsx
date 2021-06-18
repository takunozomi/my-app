import { memo, VFC } from "react";
import { Link } from "react-router-dom";

export const Page404: VFC = memo(() => {
  return (
    <div>
      <p>こちらのページは存在しません</p>
      <Link to="/">トップへ戻る</Link>
    </div>
  );
});

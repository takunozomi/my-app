import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

//ユーザーカードがクリックされたときのidに一致した情報を取得しモーダル表示するカスタムフック
export const useSelectUsers = () => {
  const [selectUsers, setSelectUsers] = useState<User | null>(null);
  const getSelectUsers = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    //findは条件に一致する最初のものを取り出す
    //findで見つからないときはundefindが返される
    const targetUser = users.find((user) => user.id === id);
    setSelectUsers(targetUser ?? null);
    onOpen();
  }, []);
  return { getSelectUsers, selectUsers };
};

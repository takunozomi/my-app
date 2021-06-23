import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useMessage } from "../hooks/useMessage";

export const useAllUsers = () => {
  const { toastMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const [users, setUser] = useState<Array<User>>([]);
  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data))
      .catch(() => toastMessage({ title: "ユーザ取得に失敗しました", status: "error" }))
      .finally(() => setLoading(false));
  }, []);
  return { getUsers, loading, users };
};

import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

//axiosmで情報を得る、ログインのための関数を作成
export const useAuth = () => {
  const history = useHistory();
  const { toastMessage } = useMessage();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          toastMessage({ title: "ログインしました", status: "success" });
          history.push("/home");
        } else {
          toastMessage({ title: "ユーザーが見つかりません", status: "error" });
        }
      })
      .catch(() => toastMessage({ title: "ログインできません", status: "error" }))
      .finally(() => setLoading(false));
  }, []);
  return { login, loading };
};

import { useCallbackRef } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/User";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const login = useCallbackRef((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          history.push("/home");
        } else {
          alert("ログインに失敗しました");
        }
      })
      .catch(() => alert("ユーザーの取得に失敗しました"))
      .finally(() => setLoading(false));
  });
  return { login, loading };
};

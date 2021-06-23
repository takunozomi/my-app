import { Center, Wrap, WrapItem, Spinner } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { UserCard } from "../organisms/User/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  //userマネジメントページを表示しているときにgetusersで取得した一覧をみる。
  //だから一回きりのマウントであるuseEffectを使用する
  useEffect(() => getUsers(), []);

  return (
    <div>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard imageUrl="https://source.unsplash.com/random" userName={user.username} fullName={user.name} />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </div>
  );
});

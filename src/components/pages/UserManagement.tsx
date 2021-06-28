import { Center, Wrap, WrapItem, Spinner, useDisclosure } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { UserCard } from "../organisms/User/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserModal } from "../organisms/User/UserModal";

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();
  const { isOpen, onClose, onOpen } = useDisclosure();

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
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard imageUrl="https://source.unsplash.com/random" userName={user.username} fullName={user.name} onOpen={onOpen} />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserModal onClose={onClose} isOpen={isOpen} />
    </div>
  );
});

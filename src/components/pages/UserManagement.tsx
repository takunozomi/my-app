import { Center, Wrap, WrapItem, Spinner, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { UserCard } from "../organisms/User/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserModal } from "../organisms/User/UserModal";
import { useSelectUsers } from "../../hooks/useSelectUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { selectUsers, getSelectUsers } = useSelectUsers();

  const onClickOpen = useCallback(
    (id: number) => {
      getSelectUsers({ id, users, onOpen });
    },
    [users, onOpen]
  );

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
              <UserCard imageUrl="https://source.unsplash.com/random" userName={user.username} fullName={user.name} onClick={onClickOpen} id={user.id} />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserModal onClose={onClose} isOpen={isOpen} user={selectUsers} />
    </div>
  );
});

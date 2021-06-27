import { Stack, Box, Divider, Flex, Heading, Input } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atom/PrimaryButton";

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const { login, loading } = useAuth();
  const onClickLogin = () => login(userId);

  return (
    <Flex justify="center" alignItems="center" height="100vh">
      <Box bg="white" p={8} shadow="md" borderRadius="md">
        <Heading as="h2">ユーザ管理アプリ</Heading>
        <Divider my={4} />
        <Stack px={4} spacing={4}>
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
          <PrimaryButton onClick={onClickLogin}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});

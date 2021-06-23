import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
  //カスタムフックを使用する
  const { login, loading } = useAuth();

  //初期値は空文字、なぜならばテキストボックスだから
  const [useId, setUserId] = useState("");

  //テキストボックスの型指定
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  //ユーザーのidを入力し、クリックしたときの関数実行
  const onClickLogin = () => login(useId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザーID" value={useId} onChange={onChangeUserId} />
          <PrimaryButton onClick={onClickLogin} loading={loading} disabled={useId === ""}>
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});

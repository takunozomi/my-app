import { Stack, Box, Divider, Flex, Heading, Input } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { PrimaryButton } from "../atom/PrimaryButton";

export const Login: VFC = memo(() => {
  return (
    <Flex justify="center" alignItems="center" height="100vh">
      <Box bg="white" p={8} shadow="md" borderRadius="md">
        <Heading as="h2">ユーザ管理アプリ</Heading>
        <Divider my={4} />
        <Stack px={6} spacing={4}>
          <Input placeholder="ユーザーID" />
          <PrimaryButton>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});

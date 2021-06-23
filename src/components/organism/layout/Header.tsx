import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";
import { MenuDrawer } from "../../molcules/MenuDrawer";

export const Header: VFC = memo(() => {
  const history = useHistory();
  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickUserManagement = useCallback(() => history.push("/home/user_management"), []);
  const onClickSetting = useCallback(() => history.push("/home/setting"), []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Flex as="nav" align="center" justify="space-between" bg="teal.500" color="gray.50" p={{ base: 3, md: 5 }}>
        <Flex as="a" _hover={{ cursor: "pointer" }} mr={8} align="center" onClick={onClickHome}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理ページ
          </Heading>
        </Flex>
        <Flex flexGrow={2} display={{ base: "none", md: "flex" }} align="center" fontSize="sm">
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <IconButton aria-label="メニューボタン" icon={<HamburgerIcon />} size="sm" variant="unstyled" display={{ base: "block", md: "none" }} onClick={onOpen} />
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} onClickHome={onClickHome} onClickSetting={onClickSetting} onClickUserManagement={onClickUserManagement} />
    </div>
  );
});

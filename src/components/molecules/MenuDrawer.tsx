import { memo, VFC } from "react";

import { Button } from "@chakra-ui/button";
import { Drawer, DrawerOverlay, DrawerBody, DrawerContent, useDisclosure } from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay>
        <DrawerBody>
          <DrawerContent p={0} bg="gray.100">
            <Button w="100%">TOP</Button>
            <Button w="100%">ユーザー一覧</Button>
            <Button w="100%">設定</Button>
          </DrawerContent>
        </DrawerBody>
      </DrawerOverlay>
    </Drawer>
  );
});

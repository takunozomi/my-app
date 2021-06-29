import { memo, VFC } from "react";

import { Button } from "@chakra-ui/button";
import { Drawer, DrawerOverlay, DrawerBody, DrawerContent } from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickSetting: () => void;
  onClickUserManagement: () => void;
  onClickHome: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { isOpen, onClose, onClickSetting, onClickUserManagement, onClickHome } = props;
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay>
        <DrawerBody>
          <DrawerContent p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>
              TOP
            </Button>
            <Button w="100%" onClick={onClickUserManagement}>
              ユーザー一覧
            </Button>
            <Button w="100%" onClick={onClickSetting}>
              設定
            </Button>
          </DrawerContent>
        </DrawerBody>
      </DrawerOverlay>
    </Drawer>
  );
});

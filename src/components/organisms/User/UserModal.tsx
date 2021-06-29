import { memo, VFC } from "react";
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, Input, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import { User } from "../../../types/api/user";

type Props = {
  user: User | null;
  onClose: () => void;
  isOpen: boolean;
};

export const UserModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, user } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalCloseButton />
          <ModalBody m={4}>
            <ModalHeader>ユーザー情報</ModalHeader>
            <Stack spacing={4}>
              <FormControl isReadOnly>
                <FormLabel>name</FormLabel>
                <Input value={user?.name}></Input>
              </FormControl>
              <FormControl isReadOnly>
                <FormLabel>email</FormLabel>
                <Input value={user?.email}></Input>
              </FormControl>
              <FormControl isReadOnly>
                <FormLabel>tel</FormLabel>
                <Input value={user?.phone}></Input>
              </FormControl>
              <FormControl isReadOnly>
                <FormLabel>address</FormLabel>
                <Input value={user?.address.city}></Input>
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});

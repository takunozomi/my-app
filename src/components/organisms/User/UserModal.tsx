import { memo, VFC } from "react";
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, Input, FormControl, FormLabel, Stack } from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const UserModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
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
                <Input value="takahashi"></Input>
              </FormControl>
              <FormControl isReadOnly>
                <FormLabel>email</FormLabel>
                <Input value="aaaa@gmail.com"></Input>
              </FormControl>
              <FormControl isReadOnly>
                <FormLabel>tel</FormLabel>
                <Input value="080-5310-73ee"></Input>
              </FormControl>
              <FormControl isReadOnly>
                <FormLabel>address</FormLabel>
                <Input value="afdfdfdgdfdfdfdf"></Input>
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});

import { memo, VFC } from "react";
import { Text, Box, Stack, Image } from "@chakra-ui/react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { fullName, imageUrl, userName, onClick, id } = props;
  return (
    <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: "0.8" }} onClick={() => onClick(id)}>
      <Stack textAlign="center">
        <Image boxSize="160px" borderRadius="full" src={imageUrl} alt={userName} m="auto"></Image>
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});

import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, loading, disabled = false} = props;
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }} isLoading={loading} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
});

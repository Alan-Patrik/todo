import Data from "./Data";
import { AiOutlineClose } from "react-icons/ai";

import { Container, ContentMenu } from "./styles";

interface Props {
  transition: string;
  value?: boolean;
  filter?: string;
  onClick?(): void;
}

const MenuGraphic: React.FC<Props> = ({
  transition,
  value,
  filter,
  onClick,
}) => {
  return (
    <Container transition={transition}>
      <AiOutlineClose onClick={onClick} />
      <ContentMenu>{value ? <Data filter={filter} /> : null}</ContentMenu>
    </Container>
  );
};

export default MenuGraphic;

import { HiOutlinePencil } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Container, Content, IconContainer } from "./styles";

interface DivProps {
  id: string;
  // state: boolean | undefined;
  content: {
    name: string;
    startDate: string;
    description: string;
    color?: string;
  };
  className: string;
  backgroundColor?: string;
  onClick?(): void | undefined;
  onEdit?(): void | undefined;
}

const CardTask: React.FC<DivProps> = ({
  id,
  content,
  onClick,
  className,
  onEdit,
}) => {
  return (
    <Container backgroundColor={content.color}>
      <Content className={className} id={id} key={content.name}>
        <div className="content-card">
          <h1>{content.name}</h1>
          <p>{content.description}</p>
          <p>{content.startDate}</p>
        </div>
        <IconContainer>
          <span className="span-icon">
            <HiOutlinePencil size={20} color="#000" onClick={onEdit} />
            <RiDeleteBin6Line size={20} color="#000" onClick={onClick} />
          </span>
        </IconContainer>
      </Content>
    </Container>
  );
};

export default CardTask;

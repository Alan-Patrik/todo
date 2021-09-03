import { IconBaseProps } from "react-icons/lib";
import {
  Container,
  Content,
  Column,
  IconContainer,
  Title,
  ResultNumber,
} from "./styles";

interface DivProps {
  id: string;
  title: string;
  number: number;
  className: string;
  backgroundColor1?: string;
  backgroundColor2?: string;
  icon?: React.ComponentType<IconBaseProps>;
  onClick?(): void | undefined;
}

const CardGrafic: React.FC<DivProps> = ({
  id,
  title,
  number,
  onClick,
  className,
  icon: Icon,
  backgroundColor1,
  backgroundColor2,
}) => {
  return (
    <Container
      onClick={onClick}
      backgroundColor1={backgroundColor1}
      backgroundColor2={backgroundColor2}
    >
      <Content className={className} id={id}>
        <Column>
          <ResultNumber>{number}</ResultNumber>
          <Title>{title}</Title>
        </Column>
        <IconContainer>{Icon && <Icon size={30} color="#000" />}</IconContainer>
      </Content>
    </Container>
  );
};

export default CardGrafic;

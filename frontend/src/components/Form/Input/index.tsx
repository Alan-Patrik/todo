import { ChangeEvent, InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface Props
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  id?: string;
  type: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  onChange?(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void | undefined;
}

const Input: React.FC<Props> = ({
  id,
  type,
  width,
  height,
  onChange,
  className,
  ...rest
}) => {
  return (
    <Container>
      {type !== "textarea" ? (
        <input
          type="text"
          id={`input-text  ${id}`}
          className={`input-text  ${className}`}
          onChange={onChange}
          {...rest}
        />
      ) : (
        <textarea
          id={`input-textarea  ${id}`}
          onChange={onChange}
          className={`input-textarea  ${className}`}
          {...rest}
        />
      )}
    </Container>
  );
};

export default Input;

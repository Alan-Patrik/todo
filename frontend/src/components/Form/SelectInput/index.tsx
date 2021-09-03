import { Container } from "./styles";

interface SelectProps {
  id?: string;
  value?: boolean;
  className?: string;
  placeholder?: string;
  onClick?(): void;
  options?: {
    value: string | number;
    label: string | number;
  }[];
  onChange?(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
}

const Select: React.FC<SelectProps> = ({
  id,
  value,
  options,
  onClick,
  onChange,
  className,
  placeholder,
  ...rest
}) => {
  return (
    <Container>
      <select
        onClick={onClick}
        onChange={onChange}
        placeholder="Select"
        id={`select-input ${id}`}
        className={`select-input ${className}`}
        {...rest}
      >
        <option
          hidden={true}
          value="Select"
          className={`option-select ${className}`}
        >
          {placeholder}
        </option>
        {options?.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className={`option-select ${className}`}
          >
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;

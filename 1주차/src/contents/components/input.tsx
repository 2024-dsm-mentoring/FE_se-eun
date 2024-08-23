import styled from "styled-components";

const Label = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  margin-left: 10px;
`;

const TextInput = styled.input`
  width: 100%;
  height: 46px;
  margin-bottom: 10px;
  padding-right: 40px;
  background-position: right 10px center;
  background-repeat: no-repeat;
  border-radius: 4px;
  border: 1px solid #999999;
  box-sizing: border-box;
`;

interface InputProps {
  label?: string;
  type: string;
  placeholder: string;
  backgroundImage?: string;
  width?: string;
  height?: string;
}

const InputField: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  backgroundImage,
  width = "100%",
  height = "100%",
}) => {
  return (
    <div>
      <Label>{label}</Label>
      <TextInput
        type={type}
        placeholder={placeholder}
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          width: width,
          height: height,
        }}
      />
    </div>
  );
};

export default InputField;

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Calendar from "../../components/Calendar";
import ContentHeader from "../../components/ContentHeader";
import Input from "../../components/Form/Input";
import InputColor from "../../components/Form/InputColor";
import SelectInput from "../../components/Form/SelectInput";

import {
  Container,
  ContentBody,
  Content,
  ContainerButton,
  ButtonUpdate,
  ButtonCancel,
  ContainerInputs,
  ContainerCalendar,
} from "./styles";

interface Props {
  onClick?(): void | undefined;
}

const EditTask: React.FC<Props> = ({ onClick }) => {
  const [selectStatus, setSelectStatus] = useState<string>();
  const [isDown, setIsDown] = useState(false);

  const options = [
    { value: "Inprogress", label: "Inprogress" },
    { value: "Finished", label: "Finished" },
  ];

  return (
    <Container>
      <ContentBody>
        <span className="icon-modal-span">
          <AiOutlineClose className="icon-modal" onClick={onClick} />
        </span>
        <Content className="col-md-12 col-sm-12 d-flex flex-wrap justify-content-center align-items-center">
          <ContainerInputs>
            <div className="title-edit-task">
              <ContentHeader title="Edit Task" />
            </div>
            <Input
              className="input-text"
              id="input-text"
              type="text"
              placeholder="Go to the market"
            />
            <Input
              className="input-textarea"
              id="input-text-area"
              type="textarea"
              placeholder="Go to the market to shop"
            />
            <SelectInput
              placeholder="Select"
              key="select"
              value={isDown}
              options={options}
              className="option-select"
              onClick={() => setIsDown(!isDown)}
              onChange={(event) => setSelectStatus(event.target.value)}
            />
            <InputColor />
            <ContainerButton>
              <ButtonUpdate className="btn-update" id="btn-update">
                <span className="btn-title-update">Update</span>
              </ButtonUpdate>
              <ButtonCancel
                className="btn-cancel"
                id="btn-cancel"
                onClick={onClick}
              >
                <span className="btn-title-cancel">Cancel</span>
              </ButtonCancel>
            </ContainerButton>
          </ContainerInputs>
          <ContainerCalendar>
            <Calendar />
          </ContainerCalendar>
        </Content>
      </ContentBody>
    </Container>
  );
};

export default EditTask;

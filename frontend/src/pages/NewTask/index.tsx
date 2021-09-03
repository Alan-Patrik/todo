import { useState } from "react";
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
  Button,
  ContainerInputs,
  ContainerCalendar,
} from "./styles";

const NewTask = () => {
  const [selectStatus, setSelectStatus] = useState<string>();
  const [isDown, setIsDown] = useState(false);

  const options = [
    { value: "Create", label: "Create" },
    { value: "Inprogress", label: "Inprogress" },
    { value: "Finished", label: "Finished" },
  ];

  return (
    <Container>
      <ContentBody>
        <Content className="col-md-12 col-sm-12 d-flex flex-wrap justify-content-center align-items-center">
          <ContainerInputs>
            <div className="title-newtask">
              <ContentHeader title="Add New Task" />
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
              <Button className="btn-create" id="btn-create">
                <span className="btn-title">Create</span>
              </Button>
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

export default NewTask;

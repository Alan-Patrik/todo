import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";

import Calendar from "../../components/Calendar";
import ContentHeader from "../../components/ContentHeader";
import Input from "../../components/Form/Input";
import InputColor from "../../components/Form/InputColor";
import SelectInput from "../../components/Form/SelectInput";
import service from "../../service/taskService";

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

  const [{ message, variant, show }, setAlert] = useState({
    message: "",
    variant: "",
    show: false,
  });

  const [state, setState] = useState({
    name: "",
    descricao: "",
    startDate: "",
    endDate: "",
    color: "",
  });

  const history = useHistory();

  const options = [
    { value: "Create", label: "Create" },
    { value: "Inprogress", label: "Inprogress" },
    { value: "Finished", label: "Finished" },
  ];

  const handleCreateTask = async (event: React.FormEvent) => {
    event.preventDefault();

    let test1 = localStorage.getItem("@tasksDay");
    let test2 = localStorage.getItem("@tasksColor");

    let data = {
      name: state.name,
      descricao: state.descricao,
      startDate: test1,
      endDate: state.endDate,
      status: selectStatus,
      color: test2,
    };

    service
      .createTask(data)
      .then((response) => {
        if (response.status === 200) {
          history.push("/tasks");
        } else {
          setAlert({
            message:
              "I'm sorry, an unexpected error occurred and the task could not be updated..\n" +
              response.status,
            variant: "danger",
            show: true,
          });
          setTimeout(() => {
            setAlert({
              message: "",
              variant: "",
              show: false,
            });
          }, 3000);
        }
      })
      .catch((error) => {
        setAlert({
          message:
            "I'm sorry, an unexpected error occurred and the task could not be updated..\n" +
            error,
          variant: "danger",
          show: true,
        });
      });
    window.location.reload();
  };

  return (
    <Container>
      <ContentBody>
        <Content className="col-md-12 col-sm-12 d-flex flex-wrap justify-content-center align-items-center">
          <Alert show={show} variant={variant}>
            {message}
          </Alert>
          <ContainerInputs>
            <div className="title-newtask">
              <ContentHeader title="Add New Task" />
            </div>
            <Form onSubmit={handleCreateTask}>
              <Input
                type="text"
                id="input-text"
                value={state.name}
                className="input-text"
                placeholder="Go to the market"
                onChange={(event) =>
                  setState({ ...state, name: event.target.value })
                }
              />
              <Input
                type="textarea"
                id="input-text-area"
                value={state.descricao}
                className="input-textarea"
                placeholder="Go to the market to shop"
                onChange={(event) =>
                  setState({ ...state, descricao: event.target.value })
                }
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
              <InputColor
                value={state.color}
                onChange={(event) =>
                  setState({ ...state, color: event.target.value })
                }
              />
              <ContainerButton>
                <Button className="btn-create" id="btn-create" type="submit">
                  <span className="btn-title">Create</span>
                </Button>
              </ContainerButton>
            </Form>
          </ContainerInputs>
          <ContainerCalendar>
            <Calendar
              value={state.startDate}
              onChange={(event) =>
                setState({ ...state, startDate: event.target.value })
              }
            />
          </ContainerCalendar>
        </Content>
      </ContentBody>
    </Container>
  );
};

export default NewTask;

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
    description: "",
    startDate: "",
    endDate: null,
    color: "",
  });

  const history = useHistory();
  let data = {};

  const handleCreateTask = async (event: React.FormEvent) => {
    event.preventDefault();

    let convertTest1 = JSON.parse(localStorage.getItem("@tasksDay")!);
    let convertTest2 = JSON.parse(localStorage.getItem("@tasksColor")!);

    data = {
      name: state.name,
      description: state.description,
      startDate: convertTest1,
      endDate: state.endDate,
      status: 0,
      color: convertTest2,
    };

    service
      .createTask(data)
      .then((response) => {
        if (response.status === 201) {
          setAlert({
            message: "Your task has been successfully registered!\n",
            variant: "success",
            show: true,
          });
          setTimeout(() => {
            setAlert({
              message: "",
              variant: "",
              show: false,
            });
            history.push("/tasks");
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
        setTimeout(() => {
          setAlert({
            message: "",
            variant: "",
            show: false,
          });
        }, 3000);
      });
  };

  return (
    <Container>
      <ContentBody>
        <Alert show={show} variant={variant}>
          {message}
        </Alert>
        <Content className="col-md-12 col-sm-12 d-flex flex-wrap justify-content-center align-items-center">
          <ContainerInputs>
            <div className="title-newtask">
              <ContentHeader title="Add New Task" />
            </div>
            <Form onSubmit={handleCreateTask}>
              <Input
                required
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
                required
                type="textarea"
                id="input-text-area"
                value={state.description}
                className="input-textarea"
                placeholder="Go to the market to shop"
                onChange={(event) =>
                  setState({ ...state, description: event.target.value })
                }
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
            <div className="title-newtask">
              <ContentHeader title="Add New Task" />
            </div>
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

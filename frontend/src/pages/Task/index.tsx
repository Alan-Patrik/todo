import { useEffect, useState } from "react";
import Calendar from "../../components/Calendar";
import CardTask from "../../components/Cards/CardTask";
import ContentHeader from "../../components/ContentHeader";
import EditTask from "../EditTask";
import service from "../../service/taskService";

import {
  Container,
  ContentBody,
  Content,
  ContainerCalendar,
  ContentCard,
  TestContainer,
  TestComponent,
} from "./styles";

interface Props {
  background?: string | undefined;
}

const Tasks: React.FC<Props> = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllTasks = async () => {
      let aux: any;
      aux = await service.getTask().then((response) => response.data);
      setData(aux.data);
    };

    getAllTasks();
  }, []);
  console.log(data);
  return (
    <>
      <Container background={!isSelected === true ? "block" : "none"}>
        <ContentBody>
          <Content className="col-md-12 col-sm-12 d-flex flex-wrap justify-content-center align-items-center">
            <ContainerCalendar>
              <div className="title-tasks">
                <ContentHeader title="Tasks" />
              </div>
              <Calendar />
            </ContainerCalendar>
            {data.length === 0 ? (
              <TestContainer>
                <TestComponent>
                  <p className="text-information-task">
                    To view your tasks here,<br></br>you need to create them!
                  </p>
                </TestComponent>
              </TestContainer>
            ) : (
              <ContentCard>
                {data?.map((test: any, index: number) =>
                  test.status !== "Completed" ? (
                    <CardTask
                      key={index}
                      className="card-task"
                      id="card-task"
                      content={test}
                      onEdit={() => setIsSelected(true)}
                    />
                  ) : null
                )}
              </ContentCard>
            )}
          </Content>
        </ContentBody>
      </Container>
      {isSelected ? <EditTask onClick={() => setIsSelected(false)} /> : null}
    </>
  );
};

export default Tasks;

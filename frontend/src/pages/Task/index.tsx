import { useState } from "react";
import Calendar from "../../components/Calendar";
import CardTask from "../../components/Cards/CardTask";
import ContentHeader from "../../components/ContentHeader";
import DataJson from "../../components/MenuGraphic/Data/Data.json";
import EditTask from "../EditTask";

import {
  Container,
  ContentBody,
  Content,
  ContainerCalendar,
  ContentCard,
} from "./styles";

interface Props {
  background?: string | undefined;
}

const Tasks: React.FC<Props> = () => {
  const [isSelected, setIsSelected] = useState(false);

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
            <ContentCard>
              {DataJson.map((test, index) =>
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
          </Content>
        </ContentBody>
      </Container>
      {isSelected ? <EditTask onClick={() => setIsSelected(false)} /> : null}
    </>
  );
};

export default Tasks;

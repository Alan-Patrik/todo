import Calendar from "../../components/Calendar";
import CardTask from "../../components/Cards/CardTask";
import ContentHeader from "../../components/ContentHeader";
import DataJson from "../../components/MenuGraphic/Data/Data.json";

import {
  Container,
  ContentBody,
  Content,
  ContainerCalendar,
  ContentCard,
} from "./styles";

const Tasks = () => {
  return (
    <Container>
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
                />
              ) : null
            )}
          </ContentCard>
        </Content>
      </ContentBody>
    </Container>
  );
};

export default Tasks;

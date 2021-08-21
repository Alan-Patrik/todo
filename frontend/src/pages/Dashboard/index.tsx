import CardGrafic from "../../components/Cards";
import ContentHeader from "../../components/ContentHeader";

import { AiOutlinePlayCircle } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
import { BsCheckCircle } from "react-icons/bs";

import ChartPizza from "react-apexcharts";
import ChartDonut from "react-apexcharts";

import {
  Container,
  ContentBody,
  Content,
  ContentChartCard,
  ContentChart,
} from "./styles";
import { useState } from "react";
import MenuGraphic from "../../components/MenuGraphic";

const Dashborad = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [graphicPizza, setGraphicPizza] = useState({
    // Graphic Pizza \\
    series: [35, 55, 10],
    options: {
      plotOptions: {
        pie: {
          expandOnClick: false,
        },
      },
      states: {
        active: {
          filter: {
            type: "none",
          },
        },
        hover: {
          filter: {
            type: "none",
          },
        },
        normal: {
          filter: {
            type: "none",
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      labels: ["Tasks Started", "Tasks In Progress", "Tasks Completed"],
      colors: ["#69BC6B", "#F9B13E", "#93CDC5"],
    },
  });

  const [graphicDonut, setGraphicDonut] = useState({
    // Graphic Donut \\
    series: [44, 55],
    options: {
      plotOptions: {
        pie: {
          expandOnClick: false,
        },
      },
      states: {
        active: {
          filter: {
            type: "none",
          },
        },
        hover: {
          filter: {
            type: "none",
          },
        },
        normal: {
          filter: {
            type: "none",
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        show: false,
      },
    },
  });

  return (
    <Container>
      <ContentBody>
        <div className="title-dashboard">
          <ContentHeader title="Dashboard" />
        </div>
        <Content className="col-md-12 col-sm-12">
          <ContentChartCard className="col-sm-12 d-flex flex-wrap">
            <CardGrafic
              number={20}
              id="tasks-started"
              title="tasks started"
              className="tasks-started"
              icon={AiOutlinePlayCircle}
              backgroundColor1="#93eaa8"
              backgroundColor2="#48983b"
              onClick={() => (setIsOpen(true), setFilter("Created"))}
            />
            <CardGrafic
              number={20}
              icon={FiBarChart2}
              id="tasks-In-progress"
              title="tasks In progress"
              backgroundColor1="#fc801a"
              backgroundColor2="#f7c933"
              className="tasks-In-progress"
              onClick={() => (setIsOpen(true), setFilter("In progress"))}
            />
            <CardGrafic
              number={20}
              icon={BsCheckCircle}
              id="tasks-completed"
              title="tasks completed"
              className="tasks-completed"
              backgroundColor1="#DBDDDE"
              backgroundColor2="#4ABDAC"
              onClick={() => (setIsOpen(true), setFilter("Completed"))}
            />
          </ContentChartCard>
          <ContentChart className="col-md-12 col-sm-12">
            <div className="col-sm-12 col-md-12 d-flex flex-wrap chart-apex">
              <ChartPizza
                type="pie"
                width={250}
                id="chart-pizza"
                className="chart-pizza"
                series={graphicPizza.series}
                options={graphicPizza.options}
                // onClick={() => setIsOpen(!isOpen)}
              />
              <ChartDonut
                width={250}
                type="donut"
                id="chart-donut"
                className="chart-donut"
                series={graphicDonut.series}
                options={graphicDonut.options}
                // onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </ContentChart>
        </Content>
      </ContentBody>
      <MenuGraphic
        onClick={() => setIsOpen(false)}
        transition={
          !isOpen ? "none" : "block" && filter !== undefined ? "block" : "none"
        }
        value={isOpen}
        filter={filter}
      />
    </Container>
  );
};

export default Dashborad;

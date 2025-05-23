import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./projectData";
import { Col, Row } from "antd";

const App = () => (
  <div className="App px-8 py-10">
    <h1 className="mb-3 text-5xl font-semibold text-stone-800">Projects</h1>
    <p className="text-indigo-700 mb-5 text-xl">
      This is a showcase of small projects that I will be doing to practice my coding skills.
    </p>
    <Row gutter={[16, 24]}>
      {projectData.map((data, index) => (
<Col key={index} xs={48} sm={24} md={12} lg={8} xl={6}>
          <ProjectCard data={data} />
        </Col>
      ))}
    </Row>
  </div>
);

export default App;

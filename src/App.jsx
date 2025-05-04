import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./projectData";
const App = () => (
  <div className="App px-8 py-10">
    <h1 className="mb-3 text-5xl font-semibold text-stone-800">Projects</h1>
    <p className="text-indigo-700 mb-5 text-xl">
      This is a showcase of small projects that I will be doing so as to
      practice my coding skills
    </p>
    {projectData.map((data, index) => (
      <ProjectCard key={index} data={data} />
    ))}
  </div>
);

export default App;

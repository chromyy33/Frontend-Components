import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const ProjectCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Card
        onClick={() => {
          navigate(`/${data.path}`);
        }}
        hoverable
        style={{
          width: 340,
          border: "black 1px solid",
          textAlign: "center",
        }}
        cover={
          <img
            alt="example"
            src={data.imageURL}
            style={{
              height: 300,
              objectFit: "cover",
              border: "black 1px solid",
            }}
          />
        }
      >
        <Meta title={data.name} description={data.description}  />
      </Card>
    </div>
  );
};

export default ProjectCard;

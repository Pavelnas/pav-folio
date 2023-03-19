import React from "react";
import { MdDesignServices, MdOutlineAutoMode } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineCloudServer } from "react-icons/ai";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="orange">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Solution Architect"}
            disc={`Design and oversee the implementation of complex technology solutions to meet the needs of a business or organization.`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={AiOutlineCloudServer}
            title={"Cloud Engineering"}
            disc={`Design and implement the latest cloud technologies from Cloud provider such as AWS to build scalable and highly available applications.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={MdOutlineAutoMode}
            title={"Automation"}
            disc={`Planning and implementing the automation of manual processes, including the development of scripts and tools to improve efficiency and reduce errors.`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={FiCodesandbox}
            title={"Web Development"}
            disc={`Designing and developing web applications using the latest technologies`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Technical consultant"}
            disc={`Provide technical expertise and advice to clients, helping them to solve problems and make the most of their technology investments.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;

import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn, FaDownload } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { ReactTerminal } from "react-terminal";

const ProfComponent = () => {
  const commands = {
    whoami: "pavelnas",
    "-h": () => (
      <span>
        Here's an example of a help message you can use for your terminal:
        <br />
        Welcome to Pav World - Help Menu
        <br />
        Here are some of the available commands and their descriptions:
        <br />
        <br />
        - command1: [Description of command1]
        <br />
        <br />
        - command2: [Description of command2]
        <br />
        <br />
        - command3: [Description of command3]
        <br />
        <br />
        - command4: [Description of command4]
        <br />
        <br />
        - command5: [Description of command5]
        <br />
        <br />
        For more information on a specific command, type "help [command]" (without quotes) to see its usage and additional details.
        <br />
        <br />
        If you need further assistance or have any questions, please refer to the project documentation or contact the project maintainers for help.
        <br />
        Thank you for using [Your Project]!
        <br />
      </span>
    ),
    help: () => (
      <span>
        Here's an example of a help message you can use for your terminal:
        <br />
        Welcome to Pav World - Help Menu
        <br />
        Here are some of the available commands and their descriptions:
        <br/>
        <br/>
        - command1: [Description of command1]
        <br/>
        <br/>
        - command2: [Description of command2]
        <br/>
        <br/>
        - command3: [Description of command3]
        <br/>
        <br/>
        - command4: [Description of command4]
        <br/>
        <br/>
        - command5: [Description of command5]
        <br/>
        <br/>
        For more information on a specific command, type "help [command]" (without quotes) to see its usage and additional details.
        <br/>
        <br/>
        If you need further assistance or have any questions, please refer to the project documentation or contact the project maintainers for help.
        <br/>
        Thank you for using [Your Project]!
        <br/>
      </span>
    ),
    refresh: () => window.location.reload(),
    cd: (directory) => window.location.href = `#${directory}`,
  };


  return (
    <> 
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="orange">I'am</span>
          </h4>
          <h1 className="orange">Ahmed Abdelkareem</h1>
          <h3>Senior Software Engineer @ Yogobe</h3>
          <p className="line17">
            As a Senior software engineer, 
            I have a wealth of experience in mentoring and leading backend teams, 
            making technical decisions, and designing architectures that deliver high standards and code quality. 
            I am proficient in provisioning and maintaining infrastructure through AWS services such as EKS, ECR, RDS, IAM, ElasticSearch, SecretsManager, and S3, including IaaC using Terraform. 
            I am also skilled in developing middleware and components that can be configured to support all kinds of configurations using Ruby.
            <br />
          </p>
          <button href="/cv.pdf" download>
            <FaDownload className="" />
            <br />
            Download my CV
          </button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://github.com/Pavelnas">
                  <AiOutlineGithub />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/ashraf-abdelkareem/">
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a href="https://www.upwork.com/freelancers/~01e2b9162c18b9bf2b">
                  <SiUpwork />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="https://raw.githubusercontent.com/Pavelnas/Pavelnas/master/IMG_0686.JPG"
            alt="profile"
          />
        </Profile>
      </Slide>

    </Container>
      {/* <div style={{height: '35rem', padding: '4rem'}}>
        <h2 className='orange' style={{'text-align': 'center'}}>Terminal</h2>
        <br />
        <ReactTerminal
          welcomeMessage={
            <div>
                <span className="green">
                Welcome to the Pav World!
                <br />
                <br />
                You are now connected to pavelnas@localhost.
                <br />
                <br />
                Feel free to explore the various commands and functionalities available in her. To get started, type "help or -h" to see a list of available commands.
                <br />
                <br />
                If you encounter any issues or have any questions, please refer to my email info@pavelnas.com.
                <br />
                <br />
                Thank you for visiting and happy exploring!
                <br />
                </span>
              <br />
            </div>
          }
          commands={commands}
          showControlBar={false}
          showControlButtons={false}
          prompt="pavelnas@portfolio:~$"
          themes={{
            "pav-folio": {
              themeBGColor: "rgb(56 58 59)",
              themeToolbarColor: "#DBDBDB",
              themeColor: "#FFFEFC",
              themePromptColor: "#ec731c"
            }
          }}
          theme="pav-folio"
        />
      </div> */}
    </>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #ec731c;
    border: none;
    color: #fff;
    font-weight: 500;
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #ec731c;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    transition: transform 400ms ease-in-out;
    border-radius: 100%;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;

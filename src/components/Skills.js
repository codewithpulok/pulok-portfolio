import React from "react";
import styled from "styled-components";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaDatabase, FaGithub, FaFigma, FaAvianex, FaSocks, FaStripe, FaTypo3 } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3 /> },
  { name: "Next.js" },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "Github", icon: <FaGithub /> },
  { name: "Stripe", icon: <FaStripe /> },
  { name: "TypeScript"},
  { name: "Figma", icon: <FaFigma /> },
  { name: "ES6", icon: <FaJs /> },
  { name: "Redux", icon: <SiRedux /> },
];

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1rem 2rem;
  background-color: var(--thirdColorFont);
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 1px 1px 85px 20px rgba(255,255,255,0.38);
  }

  svg {
    width: 50px;
    height: 50px;
   color: var(--cuteColor);
    margin-bottom: 1rem;
    cursor: pointer;
  }

  h3 {
    font-size: 1rem;
    font-weight: 800;
    text-align: center;
    color: var(--cuteColor);
  }

  img{
    width:4.2rem;
  }
`;

const Skills = () => {
  return (
    <div className="container">
      <div className="my__skill">
        <h1 style={{ fontSize: "1.5rem", padding: "1rem 0" }}>Skills</h1>
      </div>
      <SkillsContainer>
        {skillsData.map((skill) => (
          <SkillCard key={skill.name}>
            {skill.icon&&skill.icon||skill.name=="Next.js"&&<img src="https://cdn.worldvectorlogo.com/logos/next-js.svg"/>||skill.name=="TypeScript"&&<img src="https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png"/>}
            <h3>{skill.name}</h3>
          </SkillCard>
        ))}
      </SkillsContainer>
    </div>

  );
};

export default Skills;

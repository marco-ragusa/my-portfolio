import './SkillBars.css';
import Container from '@mui/material/Container';
// import styled, { keyframes } from 'styled-components';

const SKILLS = [
    {id: "react", type: "React", level: 65},
    {id: "python", type: "Python 3", level: 90},
    {id: "restAPI", type: "Rest API", level: 80},
    {id: "kube", type: "Kubernetes / Docker", level: 90},
    {id: "linux", type: "Linux", level: 95},
    {id: "regex", type: "Regex", level: 100},
  ];

  export const SkillBars = () => {
    return(  
        <Container maxWidth="md">
            <div className="wrapper">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="container">
                    <h4>Skills</h4>
                    {SKILLS.map((skill) => 
                        <div className="skills">
                            <div className="details">
                                <span>{skill.type}</span>
                                <span>{skill.level}</span>
                            </div>
                            <div className="bar">
                                <div id={`${skill.id}-bar`}></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    )
}
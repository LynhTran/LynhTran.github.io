import React from "react";
import { Timeline, Event } from "react-timeline-scribble";

const VerticalTimeline = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 10,
        margin: 20,
        borderRadius: 15,
      }}
    >
      <Timeline>
        <Event
          interval={"March 2023 – Present"}
          title={"Software Engineer"}
          subtitle={"Microsoft"}
        >
          ● Turning complex Figma designs into reality for the Window's Data
          platform using React, MobX, FluentUI and Typescript
          <br></br>● Creator and maintainer of User Feedback spike detection UI
          and Feature Rollup customizable view UI
          <br></br>● Built upon the legacy Flight/Release sign off UI to support
          more data and more frequent releases, fueling the meetings that help
          bring Microsoft’s teams together to ship Windows to millions of
          customers worldwide
          <br></br>● Improved performance Health data portal, by making
          rendering time 4x faster
        </Event>
        <Event
          interval={"May 2022 - Aug 2022"}
          title={"Software Engineer Intern"}
          subtitle={"Microsoft"}
        >
          ● Developed a Windows app for improved image scaling using the Windows
          composition engine and the super resolution neural network
          <br></br>● Enhanced the Windows Graphics Capture API with a
          customizable frame rate feature for an improved user experience
          <br></br>● Utilized C++, Windows API, DirectML, and Direct3D to
          deliver a user-focused intern project
        </Event>
        <Event
          interval={"Sep 2021 - Jan 2022"}
          title={"Teaching Assistant"}
          subtitle={"University of Minnesota"}
        >
          ● Taught lab sessions and conducted weekly office hours for the Intro
          to Algorithms & Data Structures class to reinforce student
          understanding of course material
          <br></br>● Provided constructive suggestions and evaluation of student
          assignments
        </Event>
        <Event
          interval={"Dec 2020 - Dec 2021"}
          title={"Director of Technology"}
          subtitle={"Business Association of Multicultural Students"}
        >
          ● Revamped the website using JavaScript, HTML, and CSS to improve user
          experience
          <br></br>● Developed a secure portal for sponsors to see student
          resume from networking events
          <br></br>● Created an alumni database
        </Event>
        <Event
          interval={"Jun 2021 - Aug 2021"}
          title={"Software Engineer Intern"}
          subtitle={"Securian Financial"}
        >
          ● Resolved tickets to improve the Retirement & Actuarial Analytics web
          platform UI
          <br></br>● Streamlined the insurance claim pipeline between
          cross-functional teams by developing scripts to generate forms
          dynamically using Java and the Spring Framework
          <br></br>● Contributed to an Agile team, utilizing Jira to create and
          update team board to enhance communication and facilitate effective
          project management
        </Event>
      </Timeline>
    </div>
  );
};

export default VerticalTimeline;

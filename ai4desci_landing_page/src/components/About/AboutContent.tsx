"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";
import TabPanel from "./TabPanel";

const tabButtons = [
  {
    id: uuid(),
    title: "About AI4DeSci",
    value: "about",
  },
  {
    id: uuid(),
    title: "Mission",
    value: "mission",
  },
  {
    id: uuid(),
    title: "Vision",
    value: "vision",
  },
];

export default function AboutContent() {
  const [activeTab, setActiveTab] = useState<string>(tabButtons[0].value);

  return (
    <>
      <div className="tabButtons flex w-full items-center justify-around">
        {tabButtons.map((tabButton) => (
          <button
            key={tabButton?.id}
            onClick={() => setActiveTab(tabButton?.value)}
            className={`w-full border-b px-2 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 ${activeTab === tabButton?.value ? "border-primary text-primary dark:border-primary" : "hover:border-primary hover:text-primary dark:border-[#4B4E56] dark:text-white dark:hover:border-primary"}`}
          >
            {tabButton?.title}
          </button>
        ))}
      </div>
      <div className="w-full">
        {activeTab === "about" && (
          <TabPanel
            title="DeSci Collaborative Cloud, AI-Empowered Science Crowdfunding"
            image1="/images/about/ecosystem.png"
            image1Alt="AI4DeSci Ecosystem"
            image2="/images/about/Flywheel.png"
            image2Alt="AI4DeSci Flywheel"
          >
            <p className="mb-6 text-base text-dark-text">
            AI4DeSci (www.AI4DeSci.com) is an ecosystem that is dedicated to continuously 
            building sustainable infrastructure to support AI-empowered open & collaborative decentralized science. 
            
            </p>
            <p className="mb-6 text-base text-dark-text">
            The ecosystem mission aims to build infrastructure that accelerate DeSci, 
            to develop use cases of scientific impact, and promote DeSci through actions. 
            </p>
            <p className="text-base text-dark-text">
            The ecosystem aims to reinforce and facilitate both the Ideation and Actions that happen throughout DeSci project lifetime. 
            This will manifest through the Collaborative Cloud and Science Crowdsourcing main platforms that are built together with community. 
            </p>
          </TabPanel>
        )}

        {activeTab === "mission" && (
          <TabPanel
            title="Built-with Latest Tools and Technologies"
            image1="/images/about/Types_of_work.png"
            image1Alt="AI4DeSci types of work"
            image2="/images/about/collaborations.png"
            image2Alt="Collaboration forms in AI4DeSci"
            leftContent
          >
            <p className="mb-6 text-base text-dark-text">
            Accelerate DeSci: Explain more about Decentralized Science and how we can accelerate
            to develop use cases of scientific impact, and promote DeSci through actions.
            </p>
            <p className="mb-6 text-base text-dark-text">
            AI-Empowered Use-Case and application scenarios. Both for the Science Crowdsourcing as well as for Collaborative Cloud.
            </p>
            <p className="text-base text-dark-text">
              DeSci promotion through action, which also be a facilitation for knowledge dissemination.
            </p>
          </TabPanel>
        )}

        {activeTab === "vision" && (
          <TabPanel
            title="Sustainable Infrastructure for AI-Empowered Decentralized Science"
            image1="/images/about/app_ai4desci.png"
            image1Alt="AI4DeSci app"
            image2="/images/about/workflow.png"
            image2Alt="AI4DeSci Workflow"
          >
            <p className="mb-6 text-base text-dark-text">
              What does we mean by Sustainable Infrastructure in the context of Decentralized Science?
              Here we are talking about decentralized cloud, IoT, Blockchain, and Data Servers ...  
            </p>
            <p className="mb-6 text-base text-dark-text">
              AI-Empowered ? more on this here
            </p>
            <p className="text-base text-dark-text">
              Facilitation of Decentralized Science, need to be self-sustaining, economically etc. 
            </p>
          </TabPanel>
        )}
      </div>
    </>
  );
}

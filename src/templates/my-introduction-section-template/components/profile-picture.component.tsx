import React from "react";
import "../../../css/global.css";
import {
  ReactJSComponent,
  NextJSComponent,
  NodeJSComponent,
  TypescriptComponent,
  MongoDBComponent,
  MernComponent,
  ReduxComponent,
  DockerComponent,
} from "./profile-icon-list.component";

type props = {
  image: string;
};

const ProfilePictureComponent = ({ ...props }: props) => {
  const components = [
    ReactJSComponent,
    NextJSComponent,
    NodeJSComponent,
    TypescriptComponent,
    MongoDBComponent,
    MernComponent,
    ReduxComponent,
    DockerComponent,
  ];
  const radius = 45;
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          borderColor: "#DAC5A7",
          animation: "spinBorder 300s linear infinite",
          transform: "skew(45deg)",
        }}
      >
        <div className="absolute inset-0 rounded-full -z-10">
          {components.map((Component, index) => {
            const angle = index * (360 / components.length) * (Math.PI / 180);
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Component />
              </div>
            );
          })}
        </div>
      </div>
      <div className="-mt-16 ml-5 z-40">
        <img src={props.image} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default ProfilePictureComponent;

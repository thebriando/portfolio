import React from "react";

type projectDescriptionProps = {
  description: string[];
};
export const ProjectDescription = ({
  description
}: projectDescriptionProps) => {
  return (
    <ul>
      {description.map(obj => (
        <li className="description">{obj}</li>
      ))}
    </ul>
  );
};

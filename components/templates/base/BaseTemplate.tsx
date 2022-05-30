import { FC } from "react";

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div>{sampleTextProp}</div>;
};

export default BaseTemplate;

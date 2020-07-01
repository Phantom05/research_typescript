import React from 'react';
import { HelloProps } from '../../defs/Test.d';

export const Hello = (props: HelloProps) => {
  return <h1>Hello {props.title}</h1>;
};

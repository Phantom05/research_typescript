import React from 'react';

export namespace CommonProps {
  export type Children = React.ReactNode[] | React.ReactNode;
  export interface ReactNode {
    children?: React.ReactNode[] | React.ReactNode;
  }
}
export namespace TemplateProps {
  export interface Template {
    header?: String;
    main?: String;
  }
  export interface PlainTemplate extends Template {
    children: CommonProps.Children;
  }
}

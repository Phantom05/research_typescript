import React from 'react';
import { TemplateProps } from '@/components/base/template';

function PlainTemplate(props: TemplateProps.PlainTemplate) {
  return (
    <div>
      <header>{props.header}</header>
      <main>{props.children || props.main}</main>
    </div>
  );
}

export default PlainTemplate;

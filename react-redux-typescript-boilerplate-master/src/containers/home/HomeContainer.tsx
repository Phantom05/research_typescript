import React from 'react';
import { PlainTemplate } from '@/components/base/template';
import { PlainButton } from '@/components/common/button';

function HomeContainer() {
  return (
    <div>
      <PlainButton />
      <PlainTemplate header="Header" main="Main">
        Children
      </PlainTemplate>
    </div>
  );
}

export default HomeContainer;

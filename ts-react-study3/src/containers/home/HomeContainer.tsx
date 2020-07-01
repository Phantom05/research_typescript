import React from 'react';
import { PlainTemplate } from '@/components/base/template';
import { PlainButton } from '@/components/common/button';

function HomeContainer() {
  return (
    <div>
      <PlainTemplate header="Header" main="Main">
        String
        <PlainButton />
      </PlainTemplate>
    </div>
  );
}

export default HomeContainer;

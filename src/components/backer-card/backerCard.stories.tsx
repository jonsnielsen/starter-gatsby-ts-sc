import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import BackerCard from './BackerCard';

storiesOf(`Backercard`, module).add(`default`, () => (
  <BackerCard email="testing@gmail.com" fluidImage={} onClick={action('clicked')} />
));

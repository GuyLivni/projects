import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text, number } from '@storybook/addon-knobs';

import MovieItem from './';

storiesOf('MovieItem', module).add(
  'With props',
  withInfo({
    text: 'Simple movie item.',
  })(() => (
    <MovieItem
      id={1}
      image={text(
        'image',
        'https://www.chapter.org/sites/default/files/production/banner/LEGO%20Batman-%20Banner.jpg',
      )}
      name={text('name', 'Lego Batman')}
      language={text('language', 'German')}
      rating={number('rating', 10)}
    />
  )),
);

import React                          from 'react';
import { configure, addDecorator }    from '@storybook/react';
import { withKnobs }                  from '@storybook/addon-knobs';
import { setOptions }                 from '@storybook/addon-options';
import Container                      from './Container';

addDecorator(withKnobs);
addDecorator(story => (
  <Container
    story={story}
  />
));

// automatically import all files ending in *.story.js
const req = require.context('../src', true, /.story.js$/);
function loadStories() {
  req.keys().forEach(req);
}

setOptions({
  name: 'React Redux Starter',
  url: 'https://github.com/GuyLivni/projects/tree/master/starter-kits/react-redux',
  addonPanelInRight: true
});

configure(loadStories, module);

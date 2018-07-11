import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';


// addDecorator((storyFn, context) => withConsole()(storyFn)(context));

const components = require.context('../src/components', true, /stories\.js$/)
const containers = require.context('../src/containers', true, /stories\.js$/)
function loadStories() {
  components.keys().forEach((filename) => components(filename))
  containers.keys().forEach((filename) => containers(filename))
}

configure(loadStories, module);
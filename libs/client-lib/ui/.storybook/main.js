const rootMain = require('../../../../.storybook/main');

rootMain.stories.push(...['../../../../**/*.stories.@(js|jsx|ts|tsx)']);

module.exports = rootMain;

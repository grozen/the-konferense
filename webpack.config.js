const { entryPoint, setOutput } = require('@webpack-blocks/webpack2');
const path = require('path');

const appPath = (...names) => path.join(process.cwd(), ...names);

//This will be merged with the config from the flavor
module.exports = {
    entry: {
        main: [
            appPath('src', 'index.ts'),
        ]
    },
    output: {
        filename: 'bundle.[hash].js',
        path: appPath('dist')
    }
};

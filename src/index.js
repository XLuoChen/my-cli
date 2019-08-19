#!/usr/bin/env node

const yeoman = require('yeoman-environment');
const env = yeoman.createEnv();

env.register(require.resolve('../../generator-myapp/generators/app'), 'myapp');

env.run('myapp');

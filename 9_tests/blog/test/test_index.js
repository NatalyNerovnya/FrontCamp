import 'angular';
import 'angular-mocks';

 import { articleApp } from './../admin/admin';

// import { articleApp } from '../public/dist/build.js';


var testsContext = require.context(".", true, /_test.js$/);
testsContext.keys().forEach(testsContext);
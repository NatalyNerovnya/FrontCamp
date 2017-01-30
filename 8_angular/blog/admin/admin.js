import Articles from './articles/articles.module.js';
import { routes } from './routes.js';

var adminApp = angular.module('adminApp', ['ngRoute', Articles.name])
    .config(["$routeProvider", "$locationProvider", routes]);;
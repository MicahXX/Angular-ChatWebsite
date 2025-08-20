import { Routes } from '@angular/router';
import {Homepage} from './homepage/homepage';
import {Login} from './login/login';
import {Signin} from './signin/signin';

export const routes: Routes = [
  {path: "", component: Homepage},
  {path: "login", component: Login},
  {path: "signin", component: Signin},
];

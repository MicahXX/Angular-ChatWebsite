import { Routes } from '@angular/router';
import {Homepage} from './homepage/homepage';
import {Login} from './login/login';
import {Signup} from './signup/signup';

export const routes: Routes = [
  {path: "", component: Homepage},
  {path: "login", component: Login},
  {path: "signup", component: Signup},
];

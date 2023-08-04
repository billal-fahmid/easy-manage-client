import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Deshboard from "../components/Deshboard";
import AddNewTask from "../components/AddNewTask";
import AllTasks from "../components/AllTasks";
import Employee from "../components/Employee";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Deshboard></Deshboard>
        },
        {
            path:'addTask',
            element:<AddNewTask></AddNewTask>
        },
        {
            path:'allTasks',
            element:<AllTasks></AllTasks>
        },
        {
            path:'employee',
            element:<Employee></Employee>
        }
      ]
    },
  ]);
  
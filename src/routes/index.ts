import Home from "../pages/Home";
import React from "react";

interface IRoute {
  path: string
  element: React.ReactNode
  key: string
}

export const routes: IRoute[] = [
  {path: '/', key: '/', element: Home()}
]

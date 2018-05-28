import React from "react";
import { render } from "react-dom";
import "./index.css";
import Board from "./Board";

render(<Board count={20} />, document.getElementById("root"));

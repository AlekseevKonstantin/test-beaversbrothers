import React from "react"

import "~/assets/styles/index.css"

import styles from "./index.module.css"

export const Layout: React.FC = ({ children }) => (
  <React.Fragment>
    <div className="root">{children}</div>
  </React.Fragment>
)

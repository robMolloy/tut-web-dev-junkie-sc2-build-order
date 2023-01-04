import React from "react";
import { navBarLinks, navBarTitle } from "../../fixtures";
import { NavBarAtom } from "../_atoms";

type TNavBar = React.FC;

export const NavBar: TNavBar = () => {
  return <NavBarAtom links={navBarLinks}>{navBarTitle}</NavBarAtom>;
};

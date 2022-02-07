import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon
        className="list-alt"
        icon={["far", "list-alt"]}
        size="2x"
      />
      Todo List with React
    </header>
  );
};

export default Header;

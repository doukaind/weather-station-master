import React, { useState } from "react";
import { Search } from "./Search";
import { SearchNavWrapper } from "./SearchNavWrapper";
import { MdClose } from "react-icons/md";
import { ButtonClose } from "./ButtonClose";

const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleOpen = () => {
    console.log("CLICKED");
    setActive(true);
  };

  const handleClose = () => {
    setActive(false);
  };

  return (
    <>
      <Search onClick={handleOpen}>Search for places</Search>
      <SearchNavWrapper active={active}>
        <ButtonClose aria-label="Button close" onClick={handleClose}>
          <MdClose size={30} />
        </ButtonClose>
      </SearchNavWrapper>
    </>
  );
};

export default Navigation;

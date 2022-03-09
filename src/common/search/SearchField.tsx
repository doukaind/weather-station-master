import React from "react";
import { InputWrapper, SearchButton, SearchWrapper } from "./SearchWrapper";

const SearchField = ({ search, handleChange, handleSubmit }: any) => {
  const isDisabled = search.length < 3;
  return (
    <SearchWrapper>
      <InputWrapper
        placeholder="search location"
        onChange={handleChange}
        value={search}
      />
      <SearchButton onClick={handleSubmit} disabled={isDisabled}>
        search
      </SearchButton>
    </SearchWrapper>
  );
};

export default SearchField;

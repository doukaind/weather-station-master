import React, { useState } from "react";
import { Search } from "./Search";
import { SearchNavWrapper } from "./SearchNavWrapper";
import { MdKeyboardArrowRight, MdClose } from "react-icons/md";
import { ButtonClose } from "./ButtonClose";
import SearchField from "../search/SearchField";
import { fetchListSearch } from "../../apis/repository";
import { ListSearch } from "./SearchList";
import { ItemSearch } from "./ItemSearch";
import Loader from "../loader/Loader";
import { setSearchCity } from "../../actions";
import { connect } from "react-redux";

const Navigation = ({ searchCity }: any) => {
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");
  const [loadCity, setLoadCity] = useState(false);
  const [listSearch, setListSearch] = useState<any[]>([]);

  const handleChange = (e: any) => setSearch(e.target.value);
  const handleOpen = () => {
    console.log("CLICKED");
    setActive(true);
  };

  const handleClose = () => {
    setActive(false);
  };

  const handleSelectCity = (city: any) => () => {
    // handleSearchCity(city)
    searchCity(city);
    // handleCelsius()
    setActive(false);
    handleClear();
  };
  const handleSubmit = async () => {
    setLoadCity(true);
    if (search.length >= 3) {
      // console.log("what is the response? : ", response);
      setTimeout(async () => {
        const { data } = await fetchListSearch(search).get("");
        setListSearch(data);
        setLoadCity(false);
      }, 5000);
    }
  };

  const handleClear = () => {
    setSearch("");
    setListSearch([]);
  };

  return (
    <>
      <Search onClick={handleOpen}>Search for places</Search>
      <SearchNavWrapper active={active}>
        <ButtonClose aria-label="Button close" onClick={handleClose}>
          <MdClose size={30} />
        </ButtonClose>
        <SearchField
          search={search}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <ListSearch>
          {loadCity ? (
            <Loader search />
          ) : (
            <>
              {!listSearch ||
                (!listSearch.length && "Not found. Can you try again!")}
              {listSearch?.length > 0 &&
                listSearch!.map((city) => (
                  <ItemSearch
                    key={city.woeid}
                    onClick={handleSelectCity(city.title)}
                  >
                    {city.title} <MdKeyboardArrowRight size={20} />
                  </ItemSearch>
                ))}
            </>
          )}
        </ListSearch>
      </SearchNavWrapper>
    </>
  );
};
const mapStateToProps = (state: any) => {
  return state;
};

export default connect(null, { searchCity: setSearchCity })(Navigation);

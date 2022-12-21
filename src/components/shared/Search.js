import React, { useEffect, useState } from "react";
import "./Search.css";
import { Sidebar } from "primereact/sidebar";
import { ProgressSpinner } from "primereact/progressspinner";
import { OrderList } from "primereact/orderlist";
import { debounce } from "../../utils/Util";
import { connect, useDispatch } from "react-redux";
import { fetchAutoCompleteData } from "../../services/actions/autoCompleteData.action";

function Search({ autoCompleteData }) {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);

  const handleInputFocus = () => {
    setVisible(true);
  };

  const searchAutoComplete = debounce((args) => {
    const obj = {
      number: 10,
      query: args,
    };
    dispatch(fetchAutoCompleteData(obj));
    return () => {
      setData([]);
    };
  }, 1000);

  useEffect(() => {
    setData(autoCompleteData.data);
  }, [autoCompleteData]);

  return (
    <>
      <form
        className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
        role="search"
        wtx-context="BA8B49B4-FD58-4C89-87D9-7289A8FDE041"
      >
        <input
          type="search"
          className="form-control form-control-dark text-bg-dark"
          placeholder="Search..."
          aria-label="Search"
          onClick={handleInputFocus}
        />
      </form>
      <Sidebar visible={visible} fullScreen onHide={() => setVisible(false)}>
        <h2>Search Cuisine Here</h2>
        <input
          type="text"
          name=""
          id=""
          className="searchInput"
          placeholder="Search Here.."
          onKeyUp={(e) => searchAutoComplete(e.target.value)}
        />
        {autoCompleteData.loading && <ProgressSpinner />}
        <ul className="autoCompleteDataList">
          {data.map((x) => {
            return (
              <li key={x.id}>
                <img
                  src={`https://spoonacular.com/recipeImages/${x.id}-90x90.${x.imageType}`}
                  alt=""
                  srcset=""
                />
                <span>{x.title}</span>
              </li>
            );
          })}
        </ul>
      </Sidebar>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    autoCompleteData: state.autoCompleteData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(fetchAutoCompleteData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);

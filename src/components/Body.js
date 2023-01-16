import { useState } from "react";
import { restaurant } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [firstname, setfistname] = useState();
  const [searchrestaurant, setSearchRestaurants] = useState(restaurant);
  //console.log(useState(restaurant));

  function filterdata(firstname, restaurants) {
    const filtersdata = restaurants.filter((restau) =>
      restau.data.name.includes(firstname)
    );
    //console.log(filtersdata);
    return filtersdata;
  }

  return (
    <>
      <div className="search-conatiner">
        <input
          className="search-input"
          type="text"
          placeholder="Search....."
          value={firstname}
          onChange={(event) => {
            setfistname(event.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterdata(firstname, searchrestaurant);
            setSearchRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {searchrestaurant.map((rest) => {
          //console.log(rest);
          return <RestaurantCard {...rest.data} key={rest.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;

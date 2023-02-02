import React from "react";
import "../../styles/BusPage/Filters.css";

export const Filters = () => {
  return (
    <>
      <div className="filters-side">
        <div className="filterheading">
          <h4 className="filter-heading-one">Filters</h4>
          <h4 className="filter-heading-two"> Clear </h4>
        </div>
        {/* Departure time & Arrival time etc.. */}
        <div className="All-filters">
          <form action="" className="form-items">
            <h4>Departure Time</h4>
            {/* DepartureTime */}
            <input
              type="checkbox"
              id="Morning Session"
              name="Morning Session"
              value=""
            ></input>
            <label htmlFor="Morning Session">Morning Session</label>
            <br />
            <br />
            <input
              type="checkbox"
              id="Afternoon Session"
              name="Afternoon Session"
              value=""
            ></input>
            <label htmlFor="Afternoon Session">Afternoon Session</label>
            <br />
            <br />
            <input
              type="checkbox"
              id="Evening Session"
              name="Evening Session"
              value=""
            ></input>
            <label htmlFor="Evening Session">Evening Session</label>
            <br />
            <hr />
            {/* Arrival time */}
            <h4>Arrival Time</h4>
            <input
              type="checkbox"
              id="Morning Session"
              name="Morning Session"
              value=""
            ></input>
            <label htmlFor="Morning Session">Morning Session</label>
            <br />
            <br />
            <input
              type="checkbox"
              id="Afternoon Session"
              name="Afternoon Session"
              value=""
            ></input>
            <label htmlFor="Afternoon Session">Afternoon Session</label>
            <br />
            <br />
            <input
              type="checkbox"
              id="Evening Session"
              name="Evening Session"
              value=""
            ></input>
            <label htmlFor="Evening Session">Evening Session</label>
            <br />
            <hr />
            {/* Pickup Point */}
            <h4>PickUp Point</h4>
            <input type="radio" id="Kolkata" name="Kolkata" value=""></input>
            <label htmlFor="Kolkata">Kolkata</label>
            <br />
            <br />
            <input type="radio" id="Cheenai" name="Cheenai" value=""></input>
            <label htmlFor="Cheenai">Cheenai</label>
            <br />
            <br />
            <input
              type="radio"
              id="Bangalore"
              name="Bangalore"
              value=""
            ></input>
            <label htmlFor="Bangalore">Bangalore</label>
            <br />
            <hr />
            {/* Drop Point */}
            <h4>Drop Point</h4>
            <input type="radio" id="Kolkata" name="Kolkata" value=""></input>
            <label htmlFor="Kolkata">Kolkata</label>
            <br />
            <br />
            <input type="radio" id="Cheenai" name="Cheenai" value=""></input>
            <label htmlFor="Cheenai">Cheenai</label>
            <br />
            <br />
            <input
              type="radio"
              id="Bangalore"
              name="Bangalore"
              value=""
            ></input>
            <label htmlFor="Bangalore">Bangalore</label>
            <br />
            <hr />
            {/* Bus Rating  */}
            <h4>Bus Rating</h4>
            <input
              type="checkbox"
              id="4 start & More"
              name="4 start & More"
              value=""
            ></input>
            <label htmlFor="4 start & More"> 4 start & More</label>
            <br />
            <br />
            <input
              type="checkbox"
              id="3 start & More"
              name="3 start & More"
              value=""
            ></input>
            <label htmlFor="3 start & More"> 3 start & More</label>
            <br />
            <br />
            <input
              type="checkbox"
              id="0 - 2 star"
              name="0 - 2 star"
              value=""
            ></input>
            <label htmlFor="0 - 2 star"> 0 - 2 star</label>
            <br />
            <hr />
            {/* Bus Operator */}
            <h4>Bus Operator</h4>
            <input
              type="checkbox"
              id="Zing Bus"
              name="Zing Bus"
              value=""
            ></input>
            <label htmlFor="Zing Bus">Zing Bus</label>
            <br />
            <br />
            <input
              type="checkbox"
              id="Kumaran Bus"
              name="Kumaran Bus"
              value=""
            ></input>
            <label htmlFor="Kumaran Bus">Kumaran Bus</label>
            <br />
            <br />
            <input
              type="checkbox"
              id="Satar Express"
              name="Satar Express"
              value=""
            ></input>
            <label htmlFor="Satar Express">Satar Express</label>
            <br />
          </form>
        </div>
      </div>
    </>
  );
};
import React, {useState} from 'react';



const Search = ({onChange}) => {


  const handlerNumberChange =(event)=>{
    onChange(event.target.value)
  }

  return (
      <div>
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name"
                   type="number"
                   className="validate"
                   onChange={handlerNumberChange}
            />

            <label htmlFor="first_name">Write a number from 1 to 832 and you will see who you look like.</label>
          </div>
        </div>
        <a className="waves-effect waves-light btn">PUSH</a>
      </div>
  );
};

export default Search;
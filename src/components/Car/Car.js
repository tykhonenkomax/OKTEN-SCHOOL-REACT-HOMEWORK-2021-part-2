import React from 'react';

const Car = ({car}) => {

  const {id, model, price, year} = car;

  return (
      <div>
        <div>
          <div>id:{id}</div>
          <div>model:{model}</div>
          <div>price:{price}</div>
          <div>year:{year}</div>
        </div>
        <div>
          <span>
            <button>Update</button>
          </span>
          <span>
            <button>Delete</button>
          </span>
          <hr/>
        </div>


      </div>
  );
};

export {Car};



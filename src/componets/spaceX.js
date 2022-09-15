import React from 'react';

const SpaceX = ({data}) => {


  return (
      <div className='generalStyleCard'>
      <div className='spaceCardStyle'>
        <div className='fontStyle'>{data.mission_name}</div>
        <div className='fontStyle'>{data.launch_year}</div>
        <img src={data.links.mission_patch_small} alt={data.mission_name}/>
      </div>
      </div>
  );
};

export default SpaceX;
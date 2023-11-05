import React from 'react';
import CategorySelect from './CategorySelect';
import DateSelect from './DateSelect';
import CitySelect from './CitySelect';
import ButtonSelect from './GoToSelectButton';

const FilterBar = () => {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '30% 30% 30% 10%',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '70px',
    backgroundColor: '#56C596',
    overflow: 'hidden',
  };

  const flexItemStyle = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  return (
    <div style={gridContainerStyle}>
      <div style={flexItemStyle}>
        <CategorySelect />
      </div>
      <div style={flexItemStyle}>
        <DateSelect />
      </div>
      <div style={flexItemStyle}>
        <CitySelect />
      </div>
      <div style={flexItemStyle}>
        <ButtonSelect />
      </div>
    </div>
  );
};

export default FilterBar;

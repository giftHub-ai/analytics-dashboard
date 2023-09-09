import React from 'react';
import Products from '../Sections/Products';
import LandingPage from '../Sections/LandingPage';

const PageSelector = ({ activeState }) => {
  let content=<LandingPage/>;

  switch (activeState) {
    case 0:
      content =  <LandingPage/>;
      break;
    case 1:
      content = <Products/>;
      break;
    case 2:
      content = <Products/>;
      break;
    default:
      content = <LandingPage/>;
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default PageSelector;

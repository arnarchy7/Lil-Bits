/* eslint-disable import/prefer-default-export */
import { useNavigate } from 'react-router-dom';
import React from 'react';

export const withRouter = (Component) => {
  function Wrapper(props) {
    const navigate = useNavigate();

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component navigate={navigate} {...props} />;
  }

  return Wrapper;
};

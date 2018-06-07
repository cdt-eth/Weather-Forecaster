import React, { Fragment } from 'react';

const Form = props => (
  <Fragment>
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="city" />
      <input type="text" name="country" placeholder="country" />
      <button> Get Weather </button>
    </form>
  </Fragment>
);

export default Form;

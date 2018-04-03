import React, { Component } from 'react';

class FancyButton extends React {
  render() {
    const { label, handleClick }
    return <button onClick={handleClick}>{label}</button>
  }
}


export default logProps(FancyButton);
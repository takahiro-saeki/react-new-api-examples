import React, { Component } from 'react';
import Counter from '../../Components/Counter';

const ChildRender = () => (
  <Counter>
    {({count, increment, decrement, incrementAsync, incrementAsyncTen}) => (
      <section>
        <div>count: {count}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={incrementAsync}>incrementAsync</button>
        <button onClick={incrementAsyncTen}>incrementAsyncTen</button>
      </section>
    )}
  </Counter>
)

export default ChildRender;

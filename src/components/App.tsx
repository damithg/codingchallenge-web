import React, { lazy, Suspense } from 'react';
import { HeaderWithRouter as Header } from './Header';
import { HomePage } from './Products/AddProduct';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray2 } from '../Styles';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { ViewProducts } from './Products/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route path="/view" component={ViewProducts} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

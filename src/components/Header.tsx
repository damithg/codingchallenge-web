import { FC, FormEvent } from 'react';
import { UserIcon } from './Icons';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray1, gray2, gray5 } from '../Styles';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export const Header: FC<RouteComponentProps> = ({ history, location }) => {
  return (
    <div
      css={css`
        position: fixed;
        box-sizing: border-box;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #fff;
        border-bottom: 1px solid ${gray5};
        box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
      `}
    >
      <span>Product Dashboard</span>
    </div>
  );
};

export const HeaderWithRouter = withRouter(Header);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import UenoLogoSvg from 'assets/images/ueno-logo.svg';
import s from './Header.scss';

export default class Header extends Component {

  static propTypes = {
    children: PropTypes.node,
  };

  criticalStyles() {

    return (

      <Helmet>
        {/* <style
          type="text/css"
          dangerouslySetInnerHTML={{ __html: criticalstuff}}
        /> */}
        <style type="text/css">

          {`
            body{ background: #4FF;}
            .${s.header}{
              background: #0F0;
            }
            .${s.header__container}{
              padding: 0 70px;
              max-width: 1370px;
            }
            .${s.header__content}{
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              padding: 30px 0;
              border-bottom: 1px solid #ccc;
            }
            .${s.header__navigation}{
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              margin-left: auto;
            }
          `}

        </style>
      </Helmet>
    );
  }

  render() {


    return (
      <header className={s.header}>
        <div className={s.header__container}>
          <div className={s.header__content}>
            <Link to="/" className={s.header__logo}>
              <UenoLogoSvg className={s.header__logoSvg} />
            </Link>

            <div className={s.header__navigation}>
              {this.props.children}
            </div>
          </div>
        </div>
        {this.criticalStyles()}
      </header>
    );
  }
}

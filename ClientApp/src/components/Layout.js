import React, { Component } from 'react';
import NavMenu from './navMenu';
import Footer from './footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <section>
          {this.props.children}
        </section>
        <Footer />
      </div>
    );
  }
}

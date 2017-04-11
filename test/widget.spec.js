import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';

import Widget from '../src/components/containers/Widget.js';

describe('<Widget/>', function () {
  console.log("ASDSA");
  it('should have a class named widget', function () {
    const wrapper = shallow(<Widget/>);
    expect(wrapper).to.not.be.undefined;
  });

  it('expects <Widget /> to respond to render', function () {
    const wrapper = shallow(<Widget/>);
    expect(wrapper).to.respondTo('render');
  });

  it('expects <Widget /> to be a type of', function () {
    const wrapper = shallow(<Widget/>);
    console.log(wrapper);
    expect(wrapper).to.be.typeOf(Component);
  });
//   it('should have props for email and src', function () {
//     const wrapper = shallow(<Avatar/>);
//     expect(wrapper.props().email).to.be.defined;
//     expect(wrapper.props().src).to.be.defined;
//   });
});

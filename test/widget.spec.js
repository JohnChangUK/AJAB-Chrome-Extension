import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';
import ToggleBar from '../src/components/presentation/ToggleBar';
import Widget from '../src/components/containers/Widget';

describe('<Widget/>', function () {

  let _wrapper

  describe('<Widget/> with showComments as true', function () {

    beforeEach(() => {
     _wrapper = shallow(<Widget />)
     _wrapper.setState({
       showComments: true
     })
    })

    it('has three child elements' , () => {
      expect(_wrapper.node.props.children).to.have.length(3)
    })

    it('has div as first child element' , () => {
      expect(_wrapper.node.props.children[0].type).to.be.equal('div')
    })

    it('has array as second child element' , () => {
      expect(_wrapper.node.props.children[1]).to.be.instanceof(Array)
    })

    it('has function as third child element' , () => {
      expect(_wrapper.node.props.children[2].type).to.be.a('function')
    })

  })

  describe('<Widget/> with showComments as false', function () {

    beforeEach(() => {
     _wrapper = shallow(<Widget />)
    })

    it('renders just the togglebar' , () => {
      expect(_wrapper.node.type).to.be.a('function')
    })
  })
});

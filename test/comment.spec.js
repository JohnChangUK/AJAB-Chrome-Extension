import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Comment from '../src/components/presentation/Comment.js';
 describe('(Component) Comment', () => {
   let _wrapper

   beforeEach(() => {
    //  let comment = {text: 'this is a comment'};
    let comment = {text: 'this is a comment'}
    // console.log(shallow(<Comment {...comment} />))
    _wrapper = shallow(<Comment {...comment}/>)
    // console.log(_wrapper.context)
   })

   it('has a div element', () => {
     expect(_wrapper.find('div')).to.have.length(1)
   })

   it('renders the comments text', () => {
    //  console.log(_wrapper)
     expect(_wrapper.unrendered.props.text).to.equal("this is a comment")
   })

   it('renders the comments text', () => {
     console.log(_wrapper.node.props.children)
     expect(_wrapper.node.props.children[0]).to.equal('this is a comment')
   })
 })

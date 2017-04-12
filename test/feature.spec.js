import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Widget from '../src/components/containers/Widget';

it("render", () => {
  var widget = ReactTestUtils.renderIntoDocument (
  <Widget />
  );
  var div = ReactTestUtils.findRenderedDOMComponentWithTag(
    widget, 'div'
    );
    console.log(div);
  }
)
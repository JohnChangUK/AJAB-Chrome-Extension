import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { createRenderer } from 'react-addons-test-utils'
import { assert } from 'chai';
import Widget from '../src/components/containers/Widget';

it("render", () => {
  var widget = TestUtils.renderIntoDocument (
  <Widget />
  );
  var div = TestUtils.findRenderedDOMComponentWithTag(
    widget, 'div'
    );
    console.log(div);
  }
)


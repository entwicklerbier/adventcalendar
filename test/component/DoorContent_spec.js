import React from 'react/addons';
import DoorContent from '../../src/components/DoorContent';
import {expect} from 'chai';

const {renderIntoDocument, Simulate, findRenderedDOMComponentWithClass}
= React.addons.TestUtils;

describe('DoorContent', () => {

  describe('content', () => {
    it('has title text', () => {
      const component = renderIntoDocument(
        <DoorContent content="Titlecontent"/>
      );

      expect(React.findDOMNode(component).textContent).to.equal("Titlecontent");
    });
  });

});

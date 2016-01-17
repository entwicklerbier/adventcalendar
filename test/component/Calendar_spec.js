import React from 'react/addons';
import {List} from 'immutable';
import {Calendar} from '../../src/components/Calendar';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate}
= React.addons.TestUtils;

describe('Calendar', () => {

  it('renders a list of days', () => {
    const component = renderIntoDocument(
      <Calendar />
    );
    const listItems = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(listItems.length).to.equal(24);
  });
});

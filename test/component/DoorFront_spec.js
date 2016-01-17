import React from 'react/addons';
import DoorFront from '../../src/components/DoorFront';
import {expect} from 'chai';

const {renderIntoDocument, Simulate, scryRenderedDOMComponentsWithClass}
= React.addons.TestUtils;

describe('DoorFront', () => {

  it('invokes callback when it is clicked', () => {
    let openedDay;
    const open = (day) => openedDay = day;

    const component = renderIntoDocument(
      <DoorFront
        day="2"
        open={open}/>
    );

    Simulate.click(React.findDOMNode(component));

    expect(openedDay).to.equal('2');
  });

  describe('states', () => {
    it('has no enabled class if isEnabled is not set', () => {
      const component = renderIntoDocument(
        <DoorFront/>
      );

      const enabledDoors = scryRenderedDOMComponentsWithClass(component, 'enabled');
      expect(enabledDoors).to.be.empty;
    });

    it('has no enabled class if isEnabled is false', () => {
      const component = renderIntoDocument(
        <DoorFront isEnabled={false}/>
      );

      const enabledDoors = scryRenderedDOMComponentsWithClass(component, 'enabled');
      expect(enabledDoors).to.be.empty;
    });

    it('has enabled class if isEnabled', () => {
      const component = renderIntoDocument(
        <DoorFront isEnabled={true}/>
      );
      const enabledDoor = scryRenderedDOMComponentsWithClass(component, 'enabled');
      expect(enabledDoor).to.not.be.empty;
    });

    it('has no opened class if isOpened is not set', () => {
      const component = renderIntoDocument(
        <DoorFront/>
      );

      const openedDoors = scryRenderedDOMComponentsWithClass(component, 'opened');
      expect(openedDoors).to.be.empty;
    });

    it('has enabled and opened class if isOpened', () => {
      const component = renderIntoDocument(
        <DoorFront isEnabled="true" isOpened="true"/>
      );
      const openedDoors = scryRenderedDOMComponentsWithClass(component, 'opened');
      expect(openedDoors).to.not.be.empty;

      const enabledDoors = scryRenderedDOMComponentsWithClass(component, 'enabled');
      expect(enabledDoors).to.not.be.empty;
    });
  });

});

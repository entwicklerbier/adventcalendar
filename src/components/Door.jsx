import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {open} from '../action_creators';
import DoorFront from './DoorFront'
import DoorContent from './DoorContent'

const style={
  margin: 10,
  perspective: 850,
  position: 'relative',
  cursor: 'pointer',
  width: 150,
  height: 200,
}

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <li
        style={style}>
        <DoorContent content={this.props.content}/>
        <DoorFront {...this.props}/>
      </li>
    )
  }
});

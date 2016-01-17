import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {open} from '../action_creators';
import DoorFront from './DoorFront'
import DoorContent from './DoorContent'

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <li>
        <DoorContent content={this.props.content}/>
        <DoorFront {...this.props}/>
      </li>
    )
  }
});

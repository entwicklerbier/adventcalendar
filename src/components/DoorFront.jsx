import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import classNames from 'classnames'

export default React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    day: React.PropTypes.number.isRequired,
    isEnabled: React.PropTypes.bool,
    isOpened: React.PropTypes.bool,
    open: React.PropTypes.func.isRequired
  },
  isEnabled: function() {
    return !!this.props.isEnabled;
  },
  isOpened: function() {
    return !!this.props.isOpened;
  },
  getDayNumber: function(){
    // humans begin counting at 1
    return this.props.day+1;
  },
  render: function() {
    return (
      <div
        className={classNames({'enabled': this.isEnabled()}, {'opened': this.isOpened()})}
        onClick={() => this.props.open(this.props.day)}>
          <h2>
            {this.getDayNumber()}
          </h2>
      </div>
    )
  }
});

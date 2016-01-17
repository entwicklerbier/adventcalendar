import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import classNames from 'classnames'

var style = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: '1px solid #DDD',
  perspectiveOrigin: 0,
  alignItems: 'center',
  justifyContent: 'center',
  transformOrigin: 'left',
  transition: 'all 1s ease'
};

var enabledStyle = {
  transform: 'rotateY(-20deg)'
}

var openedStyle = {
  transform: 'rotateY(-97deg)'
}

var headerStyle = {
  color: '#555',
  fontSize: 50,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
}

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
  getStyle: function(){
    return Object.assign({}, style, this.isOpened()?openedStyle:this.isEnabled()?enabledStyle:'');
  },
  render: function() {
    return (
      <div
        style={this.getStyle()}
        className={classNames('mdl-card', 'mdl-shadow--4dp', {'enabled': this.isEnabled()}, {'opened': this.isOpened()})}
        onClick={() => this.props.open(this.props.day)}>
          <h2 style={headerStyle}>
            {this.getDayNumber()}
          </h2>
      </div>
    )
  }
});

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
  border: '1px solid #DDD'
};

export default React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    content: React.PropTypes.string
  },
  render: function() {
    return (
      <div
        className="mdl-card"
        style={style}>
          <div className="mdl-card__title">
            {this.props.content}
          </div>
      </div>
    )
  }
});

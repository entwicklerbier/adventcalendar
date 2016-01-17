import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export default React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    content: React.PropTypes.string
  },
  render: function() {
    return (
      <div>
          <div>
            {this.props.content}
          </div>
      </div>
    )
  }
});

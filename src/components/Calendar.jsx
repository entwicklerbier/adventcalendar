import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map, List} from 'immutable';
import {connect} from 'react-redux';
import {open}  from '../action_creators';
import Door from './Door'

const style = {
  listStyle: 'none',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around'
}

export const Calendar = React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    doors: React.PropTypes.instanceOf(List)
  },
  getDefaultProps: function() {
    return {
      doors: List()
    };
  },
  getRange: function(day) {
    // limit door count to 24
    return Math.max(this.props.doors.size, 24)
  },
  getDoors: function(){
    let doors = [];
    const range = this.getRange()
    for (let day = 0; day<range; day++) {
      let door = {day: day};
      if (this.props.doors.has(day)){
        doors.push(Object.assign(door, this.props.doors.get(day).toJS()));
      } else {
        doors.push(door);
      }
    }
    return doors;
  },
  render: function() {
    return (
      <ul style={style}>
        {this.getDoors().map(door =>
          <Door key={door.day} {...door} open={this.props.open} />
        )}
      </ul>
    )
  }
});

function mapStateToProps(state) {
  return {
    doors: state.getIn(['doors'])
  }
}

export const CalendarContainer = connect(
  mapStateToProps,
  {open}
)(Calendar);

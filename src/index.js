import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState} from './action_creators'
import App from './components/App';
import {CalendarContainer} from './components/Calendar';


const store = createStore(reducer)

const doors =
{
  doors: [
    {content: 'First door Content', isEnabled: true},
    {content: 'Second door Content'}
  ],
}

store.dispatch(setState(doors))

ReactDOM.render(
  <Provider store={store}>
    <App>
      <CalendarContainer/>
    </App>
  </Provider>,
  document.getElementById('root')
)

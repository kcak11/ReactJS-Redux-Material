'use-strict';

/**
 * make our imports
 */
import axios from 'axios';
import { TEST_ACTION } from './types';

/**
 * define our root api route
 */
const API_URL = 'http://localhost:3000/api';

/**
 * our test action
 */
export function testAction() {
  return function(dispatch) {
    axios.get(`${API_URL}/helloworld`)
    .then(response => {
      dispatch({
        type: TEST_ACTION,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

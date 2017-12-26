import { CALL_API } from 'redux-api-middleware';

export const invoke = (config, { auth = true } = {}) => (dispatch) => {
  const result = {
    ...config,
    credentials: auth ? 'same-origin' : 'omit', // https://www.npmjs.com/package/redux-api-middleware#rsaacredentials
  };

  result.headers = {
    'content-type': 'application/json',
    pragma: 'no-cache',
    'cache-control': 'no-cache',
    ...result.headers,
  };
  if (typeof result.body !== 'string') {
    result.body = JSON.stringify(result.body);
  }

  return dispatch({
    [CALL_API]: result,
  });
};

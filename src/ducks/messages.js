export const FOCUS       = 'synap/messages/focus';
export const LOAD        = 'synap/messages/load';
export const LOAD_RESULT = 'synap/messages/load/result';
export const LOAD_ERROR  = 'synap/messages/load/error';


export const setFocus = payload => dispatch => dispatch({ type: FOCUS,  payload });

export const load = (count=10) => (dispatch, state) => { 
  
  const { messages: { start } } = state(); 

  dispatch({ type: LOAD });
  fetch(`https://morning-falls-3769.herokuapp.com/api/messages?start=${start}&count=${count}`)
    .then(res => res.json())
    .then(results => dispatch({ type: LOAD_RESULT, payload: { results, start: start + count } }))
    .catch(payload => dispatch({ type: LOAD_ERROR, payload }));
};  


const initialState = { 
  loading: false, 
  results: [],
  start: 0, 
};

export default (state=initialState, { type, payload }) => {
  
  switch (type) { 

    case FOCUS: 
      return { 
        ...state, 
        focus: state.focus === payload ? undefined : payload 
      };

    case LOAD: 
      return { 
        ...state, 
        loading: true 
      };
    
    case LOAD_RESULT: 
      return {
        ...state, 
        loading: false, 
        results: {
          ...state.results,
          ...payload.results.reduce((result, message) => { 
            result[message.id] = message;
            return result;
          }, {}),
        },
        start: payload.start
      };
  
    default: return state; 
  }
};
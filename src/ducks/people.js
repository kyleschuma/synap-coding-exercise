export const FOCUS       = 'synap/people/focus';
export const LOAD        = 'synap/people/load';
export const LOAD_RESULT = 'synap/people/load/result';
export const LOAD_ERROR  = 'synap/people/load/error';


const fetchPerson = email =>   
  fetch(`https://morning-falls-3769.herokuapp.com/api/people/${email}`)
    .then(res => res.json())

export const setFocus = payload => ({ type: FOCUS, payload });

export const load = emails => (dispatch, state) => { 
  
  const { people } = state();

  // don't try to load anything already in the store
  emails = emails.filter(email => people[email] === undefined);
  if (emails.length === 0) return;

  dispatch({ type: LOAD, payload: emails });

  Promise.all(emails.map(fetchPerson))
    .then(payload => dispatch({ type: LOAD_RESULT, payload }))
    .catch(payload => dispatch({ type: LOAD_ERROR, payload }));  
};  


const initialState = { 
  focus: undefined, 
  results: {}
};

export default (state=initialState, { type, payload }) => {
  
  switch (type) { 
    case FOCUS: 
      return { ...state, focus: payload };
      
    case LOAD: 
      return { 
        ...state, 
        results: {  
          ...state.results,
          ...payload.reduce((result, email) => {
            result[email] = { email, name: email };
            return result;
          }, {}) 
        },
      };
    
    case LOAD_RESULT: 
      return {
        ...state, 
        results: {  
          ...state.results,
          ...payload.reduce((result, person) => {
            result[person.email] = person;
            return result;
          }, {}) 
        },
      };
  
    default: return state; 
  }
};
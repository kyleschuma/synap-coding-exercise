
const messagesUrl = (start=0, count=25) => 
  `https://morning-falls-3769.herokuapp.com/api/messages?start=${start}&count=${count}`;

const personUrl = email => 
  `https://morning-falls-3769.herokuapp.com/api/people/${email}`;

const json = res => res.json();

  
export const fetchMessages = (...args) => 
  fetch(messagesUrl(...args)).then(json);

export const fetchPerson = email => 
  fetch(personUrl(email)).then(json);

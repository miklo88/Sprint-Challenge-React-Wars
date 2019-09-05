# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
What React JS tries to solve is dynamic styling over a short period of time. Small single component changes in multiple locations throughout a browser have to be managed and react.js does that really efficiently. 

1. What does it mean to think in react? To think in react is to simplify a problem. Already knowing what is going on in the DOM and how much congestion can take place with writing in vanilla js. With react we're able to clean everything up. So instead of having 6 different laces to tie up a shoe, we can apply react and go from 6 laces to 1. 

1. Describe state. A JavaScript object. One that influences the output of render. State is managed within the component very similiar to variables being declared in a function.

1. Describe props. Short for "properties". Is a JavaScript object as well. One that influences the output of render. props get passed to the component as a function parameter. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes? 
Anything that effects something outside the scope of the function being executed. 
example. putting the empty array at the end of this useEffect function prevents an infinite loop from occuring. Thus allowing the api to only run when data inside of our array has changed. 
useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => { 
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])



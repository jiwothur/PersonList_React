import React from 'react';

const Person= () =>{
  return (
    <div>
    </div>
  )
}

const PersonList = () =>{
  return (
    <div>
      <Person />
    </div>
  )
}


const App = () => {
  return (
    <div className="container">
     <PersonList />
    </div>
  );
}
export default App;

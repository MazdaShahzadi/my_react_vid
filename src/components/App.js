import React from 'react'
import CountButton from  '../styles/CountButton/CountButton'

const App = () => {
    
    
      return (
      <div> 
        <CountButton  incrementBy={1} buttonColor={'blue'}  />
        <CountButton  incrementBy={5} buttonColor={'yellow'} />
      </div>
      )
    }

    export default App
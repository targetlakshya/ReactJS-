import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   )
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )

const anotherUser = " Chai or React JS"

// how to create an react element

const reactElement = React.createElement(
  'a', // Define element
  {
    href: 'https://google.com', target: '_blank'
  },
  'CLick me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // anotherElement  
    reactElement
  
)

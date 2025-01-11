import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp (){
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google!'
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google</a>
)
const anotherUser = "My react js"

 ReactDOM.createRoot(document.getElementById('root')).
 render(
 
    <App/>

)

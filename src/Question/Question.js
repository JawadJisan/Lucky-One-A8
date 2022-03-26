import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='questions'> 
              <div className='ans'>
              <h1>How React Works?</h1>
                <p>
                React is a JavaScript library, that creates user interfaces (UIs). <br></br>
                React DOM is slow usually(The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents.<br></br>
                So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript.<br></br>
                So when it needs to read or write to the DOM, it will use the virtual representation of it.
                Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.<br></br>
                Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                </p>

                <br></br>
                <br></br>
                <br></br>

                <h1>Difference between Props and State?</h1>
                <p>
                    1. Props are read-only. <br></br>
                    State changes can be asynchronous.<br></br>
                    2. Props are immutable.	and State is mutable.<br>
                    </br>
                    3. Props allow you to pass data from one component to other components as an argument.	<br></br>
                    State holds information about the components.
                    <br></br>
                    4. Props can be accessed by the child component. and State Can't accessed by child component.<br>
                    </br>
                    5. Props are used to communicate between components.	<br></br>States can be used for rendering dynamic changes with the component.
                    6. Props make components reusable.	and State cannot make components reusable.


                </p>
              </div>



        </div>
    );
};

export default Question;
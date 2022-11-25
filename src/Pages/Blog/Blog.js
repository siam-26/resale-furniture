import React from 'react';

const Blog = () => {
    return (
        <div className='w-5/6 pl-24  mt-24 mb-24 text-justify'>
            <h1 className='font-bold text-3xl mb-5 '>Here are some important Questions:</h1>

            <h3 className='text-neutral text-2xl font-semibold'><b className='text-primary'>Q1:</b>What are the different ways to manage a state in a React application?</h3>
            <p className='mt-3'><b>Ans:</b> There are four main types of state need to properly manage in React apps: There are:- <i>Local state,Global state,Server state & URL state.</i></p>

            <br />

            <h3 className='text-neutral font-semibold text-2xl '><b className='text-primary'>Q2:</b> How does prototypical inheritance work?</h3>
            <p className='mt-3'><b>Ans:</b> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.It is a method by which an object can inherit the properties and methods of another object.</p>

            <br />


            <h3 className='text-neutral font-semibold text-2xl '><b className='text-primary'>Q3:</b>What is a unit test? Why should we write unit tests?</h3>
            <p className='mt-3'><b>Ans:</b> Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  <br /><br />
                The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>

            <br />

            <h3 className='text-neutral font-semibold text-2xl '><b className='text-primary'>Q4:</b>What are the differences between React vs. Angular vs. Vue?</h3>
            <p className='mt-3'><b>Ans:</b> The difference between React,Angular and Vue is in the methods used to render content in the DOM.Vue uses HTML and JSX templates, while React uses only JSX.While JSX is designed to speed up and greatly simplify complex tasks, it can also greatly complicate what was originally intended to be a simple task. </p>
        </div>
    );
};

export default Blog;
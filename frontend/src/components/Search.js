import React from 'react';
import './Navbar.css';
const SearchBar = () => (
    <form action="/" method="get"> 
        <label htmlFor="header-search">
            <span className="Search">Search anything here</span> .
        </label>
        <input
            type="text"//what type it is so here we have used text type.
            id="header-search"//typeid returns the type of an expression at runtime.s it will returnn "header search" whil runtime.
            placeholder="Search anything here!!" //The placeholder attribute is a string that provides a brief hint to the user as to what kind of information is expected in the field.Here it is saying search anything!!
            name="s" 
        />
        <button type="submit">Search</button> 
    </form>//The form-data can be sent as URL variables (with method="get") or as HTTP post transaction (with method="post")
    //created a classname called search The <span> tag is easily styled by CSS or manipulated with JavaScript using the class or id attribute
    //here we have created const SearchBar which contains followed information 
);

export default SearchBar;//Here export default The export statement is used when creating JavaScript modules to export objects, functions, variables from the module so they can be used by other programs with the help of the import statements.So here exported function named as Searchbar.
**Chapter 05 Let’s Get Hooked!**

\1) What is the difference between Named Export, default export and \* as export?

- Named export- Whenever we have a two or more than 2 functional components then there we have to use named export.                              Ex- **export const Title=()=>{}**  and in our main file we have to import like this **import {Title} from “./compon/Title”.**
- Default export- If we want to export only one component in our file then we can use default export, always remember in file we can’t use two or more default export.                                                                       Ex- **default export Title** and we have to import like this import **Title form  “./compon/Title”.**
- \* export- If we have numerous exports we can avoid writing multiple lines of import declaration and import everything. 

Ex- **import \* as obj from  “./compon/Title”**                                                                                                   

\2) What is the importance of config.js File?

`           `During Development we might have many values/links/variable that might need to be hard-set / hardcoded and replace later on. Going around the code and replacing in each and every place is an unreliable. So to take this process simpler we can use a config.js file where we store all our values references that may change depending on the environment.

\3) What are react hooks?

`           `React hooks is nothing just a normal JavaScript function. They let you use a state and other react features without writing a class.

\4) Why we do need usestate hook?

`           `Suppose we are using a normal variable ex. X=10; and I use this value on a h1 tag. Now if we want to click a button and  change the value of x=11 by using some function, but after clicking value is not changing in h1 tag because react doesn’t track the normal variable. So we are using a usestate hook. It allows use to update and re-render the value with UI without any confusion.


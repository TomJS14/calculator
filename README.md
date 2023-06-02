# calculator

**What i learnt**

1. How to use grid template areas to assign elements within the grid
2. The use of 'position absolute' & 'translate' to align elements in the page
3. To set scripts to defer if page load is needed before accessing the DOM
4. How to use dataset custom attributes in HTML - Used here to save states of the calculator
5. Using parseFloat() & ParseInt() and the use case for each
6. Setting flags to check if a calculation has already been performed, to then use in IF statements
7. Saving states in the DOM vs Saving states in JS variables
8. Event delegation for query selectors - Bubbling to select children elements with a common parent




Bugs

1. Deal with '.' being selected first, needs append to the 0
<!-- 2. Deal with numbers being appended if a number is pressed after the equals -->
3. Deal with very large numbers going off the screen, set a limit or rounding
<!-- 4. Deal with wrong calculations when equals is pressed after the calculation (wrong numbers stored)
 -->
<!-- 5. Deal with bugs when clear -> = -> number is pressed - not actually clearing -->
<!-- 6. Use Includes(.) to only allow one decimal to be selected -->
<!-- 7. If number is selected after a calculation is displayed, reset to that number -->



Extra's - To Do & Functionality to Add

1. Delete button - delete current input/backspace
2. Set a limit to the numbers that can be displayed to prevent overflow
3. Keyboard support,  using key value codes
4. Differentiate between clear and all clear
5. Use Media queries to make responsive for mobile devices
6. Re-factor



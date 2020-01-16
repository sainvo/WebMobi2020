Web and mobile programming 2020
Exercises
Exercises
Part 0
Turning in the exercises
Exercises are turned in on the course Moodle page. You can either submit the exercise in a ZIP file or a text file with a link to a Git repository containing the exercises.

Exercises are returned one exercise set at a time.

Some of the exercises are different stages of building one application. In these cases, returning the last (most complete) version of the application is enough, although you can also include all stages (in the ZIP file or Git repository) if you so wish.

Make sure you have carefully read the beginning of Part 0 where the assessment of the course has been discussed, so that you know how exercises affect the final grade. There will be 45 exercises in total and each of them is worth 1 point.

Part 0
Deadline 15.2.2020 at 23:55

Basics of web applications
0.1 HTML
Design a simple HTML page containing at least <b>an anchor (link), a table, a list, an image and a form with some input elements</b>.For instance, this page can represent a form which can be used for ordering products from a web store. You can leave the "action" attribute of the form undefined.

Note that the purpose of this exercise is to learn to write plain HTML code. Do not use tools that automatically generate HTML code, such as WYSIWYG editors.

It is assumed here that most students know some basics of HTML already, so if you do not, you will have to work a little bit harder to gain the required knowledge. Mozilla's HTML tutorial is a good place to start.

0.2 CSS
Add some styling to the web page you made in the previous exercise by using CSS. Adjust at least the following things:

Define a style rule that changes the appearance of an anchor (link) when you hover mouse over it.
Write styles for lists and tables, then use specificity to make one row or cell in your table (or one item in your list) appear different from other.
Use the id and class selectors when defining the styles. Experiment different ways of positioning elements and adjusting their size.
Again, Mozilla's CSS tutorial is a good source of information.

0.3 The notes page in the example application
In this exercise we will revisit the web application for creating notes we used as an example in the material. When a user uses the browser to access the address https://fullstack-exampleapp.herokuapp.com/, we can describe the sequence of ensuing events as a sequence diagram as follows:



You can create sequence diagrams e.g. by using draw.io.

Draw a similar diagram describing what happens when the user navigates to the notes page, that is, to the address https://fullstack-exampleapp.herokuapp.com/notes

The diagram does not necessarily have to be a sequence diagram. Any other reasonable diagram is fine.

All the essential information for this and the two following exercises has been explained in the text of Part 0. The idea of these exercises is to revise the text and carefully consider how the application works.

0.4 New note
Draw a diagram describing what happens when the user creates a note on the page https://fullstack-exampleapp.herokuapp.com/notes, that is, when the user types something in the text field and presses the save button (Talleta).

When necessary, the operations happening on the server or in the browser can be added to the diagram as comments.

0.5 New note in the single-page application
Draw a diagram describing what happens when the user creates a note using the single-page version https://fullstack-exampleapp.herokuapp.com/spa of the example application.

Web and mobile programming 2020
sjprau@utu.fi
Creative Commons -lisenssi
Materiaali on lisensoitu Creative Commons BY-NC-SA 3.0 -lisenssillä.
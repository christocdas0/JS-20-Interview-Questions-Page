let questions = [
  {
    id: 1,
    title: " What is JavaScript?",
    info: "JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages. The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
  },
  {
    id: 2,
    title: "Is JavaScript a case-sensitive language?",
    info: "Yes, JavaScript is a case sensitive language.  The language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters.",
  },
  {
    id: 3,
    title:
      "Can you assign an anonymous function to a variable and pass it as an argument to another function?",
    info: "Yes! An anonymous function can be assigned to a variable. It can also be passed as an argument to another function. ",
  },
  {
    id: 4,
    title: " What is Callback?",
    info: "A callback is a plain JavaScript function passed to some method as an argument or option. It is a function that is to be executed after another function has finished executing, hence the name ‘call back‘. In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions.",
  },
  {
    id: 5,
    title: "How to delete a cookie using JavaScript?",
    info: "If you want to delete a cookie so that subsequent attempts to read the cookie in JavaScript return nothing, you just need to set the expiration date to a time in the past. You should define the cookie path to ensure that you delete the right cookie. Some browsers will not let you delete a cookie if you don’t specify the path. ",
  },
  {
    id: 6,
    title: "What is the difference between Local storage & Session storage?",
    info: "Local Storage – The data is not sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) – reducing the amount of traffic between client and server. It will stay until it is manually cleared through settings or program. Session Storage – It is similar to local storage; the only difference is while data stored in local storage has no expiration time, data stored in session storage gets cleared when the page session ends. Session Storage will leave when the browser is closed. ",
  },
  {
    id: 7,
    title: " What is the difference between the operators ‘==‘ & ‘===‘?",
    info: "The main difference between “==” and “===” operator is that formerly compares variable by making type correction e.g. if you compare a number with a string with numeric literal, == allows that, but === doesn’t allow that, because it not only checks the value but also type of two variable, if two variables are not of the same type “===” return false, while “==” return true. ",
  },

  {
    id: 8,
    title: "  What is the difference between null & undefined?",
    info: "Undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value. Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object. ",
  },

  {
    id: 9,
    title: "  What is an event bubbling in JavaScript?",
    info: "Event bubbling is a way of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements. The execution starts from that event and goes to its parent element. Then the execution passes to its parent element and so on till the body element. ",
  },
  {
    id: 10,
    title: "  What is NaN in JavaScript?",
    info: "NaN is a short form of Not a Number. Since NaN always compares unequal to any number, including NaN, it is usually used to indicate an error condition for a function that should return a valid number. When a string or something else is being converted into a number and that cannot be done, then we get to see NaN. ",
  },
  {
    id: 11,
    title: "  What is a prompt box in JavaScript?",
    info: "A prompt box is a box which allows the user to enter input by providing a text box. The prompt() method displays a dialog box that prompts the visitor for input. A prompt box is often used if you want the user to input a value before entering a page. When a prompt box pops up, the user will have to click either “OK” or “Cancel” to proceed after entering an input value.. ",
  },
  {
    id: 12,
    title: "  Enumerate the differences between Java and JavaScript?",
    info: "Java is a complete programming language. In contrast, JavaScript is a coded program that can be introduced to HTML pages. These two languages are not at all inter-dependent and are designed for different intent. Java is an object-oriented programming (OOPS) or structured programming languages like C++ or C, whereas JavaScript is a client-side scripting language. ",
  },
  {
    id: 13,
    title: "  What is the use of isNaN function?",
    info: "isNan function returns true if the argument is not a number; otherwise, it is false. ",
  },
  {
    id: 14,
    title: " What is negative Infinity?",
    info: "Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero. ",
  },
  {
    id: 15,
    title: "  Which company developed JavaScript?",
    info: "Netscape is the software company that developed JavaScript. ",
  },
  {
    id: 16,
    title: "  What is ‘this’ keyword in JavaScript?",
    info: "‘This’ keyword refers to the object from where it was called. ",
  },
  {
    id: 17,
    title: "  What is the working of timers in JavaScript?",
    info: "Timers are used to execute a piece of code at a set time or repeat the code in a given interval. This is done by using the functions setTimeout, setInterval, and clearInterval.    The setTimeout(function, delay) function is used to start a timer that calls a particular function after the mentioned delay. The setInterval(function, delay) function repeatedly executes the given function in the mentioned delay and only halts when canceled. The clearInterval(id) function instructs the timer to stop.  Timers are operated within a single thread, and thus events might queue up, waiting to be executed. ",
  },
  {
    id: 18,
    title: "  What is the difference between ViewState and SessionState?",
    info: "‘ViewState’ is specific to a page in a session., ‘SessionState’ is specific to user-specific data that can be accessed across all web application pages. ",
  },
  {
    id: 19,
    title: " What are all the looping structures in JavaScript?",
    info: "For, While, Do-While ",
  },
  {
    id: 20,
    title: "What would be the result of 3+2+”7″?",
    info: "Since 3 and 2 are integers, they will be added numerically. And since 7 is a string, its concatenation will be done. So the result would be 57. ",
  },
];

let mainContainer = document.querySelector(".container");


let ques = questions.map((question) => {
  let article = document.createElement("article");
  article.classList.add("question");
  let header = document.createElement("header");

  let h4 = document.createElement("h4");
  let button = document.createElement("button");
  button.classList.add("btn");
  let i = document.createElement("i");
  i.classList.add("fa");
  i.classList.add("fa-plus");

  button.appendChild(i);
  header.appendChild(h4);
  article.appendChild(header);
  mainContainer.appendChild(article);

  h4.innerText = question.title;
  header.appendChild(button);
  let p = document.createElement("p");
  article.appendChild(p);
  p.innerText = question.info;
  p.classList.add("non");

  button.addEventListener("click", () => {
    p.classList.toggle("non");
    i.classList.toggle('fa-minus')
  });
});

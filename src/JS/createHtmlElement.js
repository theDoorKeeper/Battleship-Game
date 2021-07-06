const createHtmlElement = (type, id, arrayClasses, content) => {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClasses) arrayClasses.forEach((myClass) => element.classList.add(myClass));
  
    if (content) element.innerText = content;
  
    return element;
  };
  export {createHtmlElement}
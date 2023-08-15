const styleElement = document.createElement("style");

styleElement.appendChild(document.createTextNode(`
  /* In Chrome, Safari, Opera, and other WebKit-based browsers */
  *::-webkit-scrollbar{
    display: none;
  }
  * {
    /* In Firefox */
    scrollbar-width: none;
    /* In IE (Internet Explorer) and Edge */
    -ms-overflow-style: none;
    color:red;
  }
`));

document.getElementsByTagName("head")[0].appendChild(styleElement);

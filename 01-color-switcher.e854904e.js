function t(t){t.disabled=!0}function e(t){t.disabled=!1}const n=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let a;n.addEventListener("click",(function(){t(n),e(o),a=setInterval((()=>{document.body.style.backgroundColor="#"+Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}),1e3)})),o.addEventListener("click",(function(){e(n),t(o),clearInterval(a)})),t(o);
//# sourceMappingURL=01-color-switcher.e854904e.js.map

# Gamelet

A program for writing JavaScript games.

## Usage
1. Include gamelet.js in an HTML document containing a ball within a mini div container
```html
<body onload="initializeVariables()">
    <div id="ball_container_div">
        <div id="ball">
        </div>
    </div> 
    <script>
        //document.body.addEventListener("load", initializeVariables);
        document.addEventListener("keydown", handleKeyPress); 
    </script>
</body>
```
2. The script will detect when the Left, Right, Up, Down Arrow Keys are pressed and will move the ball element accordingly
3. Javascript Animation has been added

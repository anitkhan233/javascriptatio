let ball; //it stores the ball object
let ballContainerDiv; //it stores the div object which is the container of the ball. The Ball moves within this container
let ball_position_top; //presents the value of top position of the ball
let ball_position_left; //presents the value of left position of the ball

/*
    function initializeVariables() initializes all the above mentioned variables
*/
function initializeVariables() 
{
    console.log("The Event 'Body Element Load' has been fired");
    ball_position_top = 0;
    ball_position_left = 0;
    ball = document.querySelector("#ball");
    ballContainerDiv = document.querySelector("#ball_container_div");
}

/*
    function handleKeyPress(event) is the event handler for keydown events of ArrowLeft, ArrowRight, ArrowUp, ArrowDown 
*/
function handleKeyPress(event)
{
    if(event.key === "ArrowUp")
    {
        ball_position_top = ball_position_top - 10;
        if(ball_position_top < 0)
        {
            ball_position_top = 0;
        }
        displayBall();
    }
    if(event.key === "ArrowDown")
    {
        ball_position_top = ball_position_top + 10;
        if(ball_position_top > (ballContainerDiv.clientHeight - ball.clientHeight) )
        {
            ball_position_top = ballContainerDiv.clientHeight - ball.clientHeight;
        }
        displayBall();
    }
    if(event.key === "ArrowRight")
    {
        ball_position_left = ball_position_left + 10;
        if(ball_position_left > (ballContainerDiv.clientWidth - ball.clientWidth))
        {
            ball_position_left = ballContainerDiv.clientWidth - ball.clientWidth;
        }
        displayBall();
    }
    if(event.key === "ArrowLeft")
    {
        ball_position_left = ball_position_left - 10;
        if(ball_position_left < 0)
        {
            ball_position_left = 0;
        }
        displayBall();
    }
}

/*
    function displayBall() to display the ball after keydown or keypress
*/
function displayBall() 
{
    ball.style.top = ball_position_top + "px";
    ball.style.left = ball_position_left + "px";
}

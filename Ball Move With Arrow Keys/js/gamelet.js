let ball; //it stores the ball object
let ballContainerDiv; //it stores the div object which is the container of the ball. The Ball moves within this container
let ball_position_top; //presents the value of top position of the ball
let ball_position_left; //presents the value of left position of the ball
let id = null; //for animation
let changed_ball_position_top; //presents resultant top position value of the ball after moving 200px up or down
let changed_ball_position_left; //presents resultant left position value of the ball after moving 200px left or right
        

/*
    function initializeVariables() initializes all the above mentioned variables
*/
function initializeVariables() 
{
    console.log("The Event 'Body Element Load' has been fired");
    ball_position_top = 0;
    ball_position_left = 0;
    changed_ball_position_top = 0;
    changed_ball_position_left = 0;
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
        changed_ball_position_top = ball_position_top - 200;
        if(changed_ball_position_top < 0)
        {
            changed_ball_position_top = 0;
        }
        id = setInterval(moveBallUp, 5);
    }
    if(event.key === "ArrowDown")
    {
        changed_ball_position_top = ball_position_top + 200;
        if(changed_ball_position_top > (ballContainerDiv.clientHeight - ball.clientHeight))
        {
            changed_ball_position_top = (ballContainerDiv.clientHeight - ball.clientHeight);
        }
        id = setInterval(moveBallDown, 5);
    }
    if(event.key === "ArrowRight")
    {
        changed_ball_position_left = ball_position_left + 200;
        if(changed_ball_position_left > (ballContainerDiv.clientWidth - ball.clientWidth))
        {
            changed_ball_position_left = (ballContainerDiv.clientWidth - ball.clientWidth);
        }
        id = setInterval(moveBallRight, 5);
    }
    if(event.key === "ArrowLeft")
    {
        changed_ball_position_left = ball_position_left - 200;
        if(changed_ball_position_left < 0)
        {
            changed_ball_position_left = 0;
        }
        id = setInterval(moveBallLeft, 5);
    }
}

function moveBallUp()
{
    if((ball_position_top == changed_ball_position_top))
    {
        clearInterval(id);
    }
    else
    {
        ball_position_top--;
        if(ball_position_top < 0)
        {
            ball_position_top = 0;
        }      
        displayBall();
    }
}

function moveBallDown()
{
    if((ball_position_top == changed_ball_position_top))
    {
        clearInterval(id);
    }
    else
    {
        ball_position_top++;
        if(ball_position_top > (ballContainerDiv.clientHeight - ball.clientHeight))
        {
            ball_position_top = ballContainerDiv.clientHeight - ball.clientHeight;
        }
        displayBall();
    }
}

function moveBallLeft()
{
    if((ball_position_left == changed_ball_position_left))
    {
        clearInterval(id);
    }
    else
    {
        ball_position_left--;
        if(ball_position_left < 0)
        {
            ball_position_top = 0;
        }      
        displayBall();
    }
}

function moveBallRight()
{
    if((ball_position_left == changed_ball_position_left))
    {
        clearInterval(id);
    }
    else
    {
        ball_position_left++;
        if(ball_position_left > (ballContainerDiv.clientWidth - ball.clientWidth))
        {
            ball_position_left = (ballContainerDiv.clientWidth - ball.clientWidth);
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

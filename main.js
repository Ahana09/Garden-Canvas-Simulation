canvas = document.getElementById ('myCanvas');
abc = canvas.getContext("2d"); 

player_width=200;
player_height=150;

rover_x = 500;
rover_y = 400; 

background_image="garden.jpg"; 
player_image="girl.png"; 


function add ()
{
background_Tag=new Image();
background_Tag.onload= uploadBackground;
background_Tag.src= background_image;


player_Tag=new Image();
player_Tag.onload= uploadPlayer;
player_Tag.src= player_image;

}

function uploadBackground() 
{
abc.drawImage(background_Tag, 0 , 0 , canvas.width, canvas.height)

}

function uploadPlayer()
 {
 abc.drawImage(player_Tag, rover_x , rover_y , player_width, player_height)
}

window.addEventListener ("keydown" , my_keydown)
function my_keydown (e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed)

if (keyPressed=='38')
{
    up();
    console.log("up");
     
}
if (keyPressed=='40')
{
    down();
    console.log("down");
}
if (keyPressed=='37')
{
    left();
    console.log("left");
}

if (keyPressed=='39')
{
    right();
    console.log("right");
}

}
function up () 

{
    if (rover_y >= 0)
    {
        rover_y = rover_y - 20;
        console.log("when up arrow is pressed, x = " + rover_x + "|y=" + rover_y); 
        uploadBackground (); 
        uploadPlayer (); 
    }
}

function down ()

{
if (rover_y <= 500)
{
    rover_y = rover_y + 20;
    console.log("when down arrow is pressed, x = " + rover_x + "|y=" + rover_y);
    uploadBackground ();
    uploadPlayer ();


}


}

function left ()

{
    if (rover_x >= 0)
    {
        rover_x = rover_x - 20; 
        console.log("when left arrow is pressed, x = " + rover_x + "|y" + rover_y);
        uploadBackground ();
        uploadPlayer ();
    
    }
}

function right ()

{
if (rover_x <= 700)
{
    rover_x = rover_x + 20;
    console.log("when right arrow is pressed, x = " + rover_x + "|y=" + rover_y); 
    uploadBackground ();
    uploadPlayer (); 
}

}
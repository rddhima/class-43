var player,healthyfood,unhealthyfood,healthyfoodGroup



function preload() {
    
}

function setup(){
createCanvas(windowWidth-50,windowHeight-50)
player=createSprite(width/2,height-50)


healthyfoodGroup = new Group()
UnhealthyfoodGroup= new Group()


}

function draw(){
background("pink")
spawnHealthyfood()
spawnUnHealthyfood()

drawSprites()
}


function spawnHealthyfood(){
if(frameCount% 100 ==0){
    healthyfood=createSprite(-10,100)
    healthyfood.velocityX=Math.round(random(5,15))
    healthyfood.velocityY=Math.round(random(5,15))

    healthyfoodGroup.add(healthyfood)
}


}

function spawnUnHealthyfood(){
    if(frameCount% 100 ==0){
        Unhealthyfood=createSprite(width,100)
        Unhealthyfood.velocityX=Math.round(random(-5,-15))
        Unhealthyfood.velocityY=Math.round(random(5,15))
    
        UnhealthyfoodGroup.add(Unhealthyfood)
    }
    
    
    }
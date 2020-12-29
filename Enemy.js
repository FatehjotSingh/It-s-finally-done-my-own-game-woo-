class Enemy{
    constructor(x,y,p,q){
        this.sprite=createSprite(x,y,10,10)
        this.sprite.addAnimation("u",oui)
        this.sprite.addAnimation("d",odi)
        this.sprite.addAnimation("r",ori)
        this.sprite.addAnimation("l",oli)
        this.sprite.scale=0.5
        this.p=p
        this.q=q



        
        
    }
    display(){
        if(this.sprite!==null){
        this.sprite.collide(horishield)
        this.sprite.collide(vertishield)
        this.sprite.setVelocity(this.p,this.q)
        if(this.sprite.isTouching(bounceGroup)){
            this.p=this.p*-1
            this.q=this.q*-1
        }
        this.sprite.debug=true
        this.sprite.setCollider("rectangle",0,0,55,55)
        if(this.sprite.velocityX<0){
            this.sprite.changeAnimation("l",oli)
            this.o="l"
        }
        if(this.sprite.velocityX>0){
            this.sprite.changeAnimation("r",ori)
            this.o="r"
        }
        if(this.sprite.velocityY<0){
            this.sprite.changeAnimation("u",oui)
            this.o="u"
        }
        if(this.sprite.velocityY>0){
            this.sprite.changeAnimation("d",odi)
            this.o="d"
        }
        this.fireCheck=dist(this.sprite.x,this.sprite.y,link.x,link.y)
        if(this.fireCheck>=180&&frameCount%80===0){
        if(this.o==="u")  {
            this.fire=createSprite(this.sprite.x,this.sprite.y-50,10,10)
            this.fire.addAnimation("j",fiu)
            this.fire.scale=0.5
            this.fire.bounceOff(horisword)
            this.fire.bounceOff(vertisword)
            this.fire.velocityY=-7
            fg1.add(this.fire)
            
        } 
        if(this.o==="d")  {
            this.fire=createSprite(this.sprite.x,this.sprite.y+50,10,10)
            this.fire.addAnimation("c",fid)
            this.fire.scale=0.5
            this.fire.bounceOff(horishield)
            this.fire.bounceOff(vertishield)
            this.fire.velocityY=7
            fg1.add(this.fire)
        }  
        if(this.o==="l")  {
            this.fire=createSprite(this.sprite.x-50,this.sprite.y,10,10)
            this.fire.addAnimation(".",fil)
            this.fire.scale=0.5
            this.fire.bounceOff(horishield)
            this.fire.bounceOff(vertishield)
            this.fire.velocityX=-7
            fg1.add(this.fire)
        } 
        if(this.o==="r")  {
            this.fire=createSprite(this.sprite.x+50,this.sprite.y,10,10)
            this.fire.addAnimation("f",fir)
            this.fire.scale=0.5
            this.fire.bounceOff(horishield)
            this.fire.bounceOff(vertishield)
            this.fire.velocityX=7
            fg1.add(this.fire)
        } 
        }
        if(this.sprite.isTouching(horisword)||this.sprite.isTouching(vertisword)||this.sprite.isTouching(arrowGroup)){            
            this.sprite.destroy()
            this.sprite=null
            fg1.destroyEach();
            score=score+1
            num1=Math.round(random(1,2))
            switch(num1){
            case 1:arrowCount++
            break
            case 2:life++
            break
            }
        }}
    }
}
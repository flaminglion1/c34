class Rope{
constructor(b1,pointB){

    var options={
        bodyA:b1,
       pointB:pointB,
        stiffness:1.2,length:250
    }



this.chain = Constraint.create(options);
this.pointB = pointB
World.add(world,this.chain)
}
display(){
 
 
    if(this.chain.bodyA){
    var p1 = this.chain.bodyA.position
    var p2 = this.pointB
    push()
    stroke("#8a560d");
  strokeWeight(8)
  line(p1.x,p1.y,p2.x,p2.y)
   
pop()  
} 
}
fly(){
this.chain.bodyA=null


} 
attach(body){
    this.chain.bodyA=body
}
}


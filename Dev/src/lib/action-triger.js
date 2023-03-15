/*
class.start() start the class then after the limit it remove the
event

this.stop() should be used in callBack function
callback function must be regular function not arrow function
Class.triger function triger the action then remove the event

*/



class TrigeredAction{
    constructor(limit,event,callBack){
      this.limit = limit;
      this.event = event;
      this.counter = 0;
      this.id = "";
      this.callBack = callBack.bind(this);
    }
    start = (body)=>{
     this.id = setInterval(()=>{
      this.counter = this.counter + 50;
      if(this.counter == this.limit){
        console.log("Time out");
        this.stop(body);   
      }
     },50)
    }
    stop = (body)=>{
        clearInterval(this.id);
        body.removeEventListener(this.event,this.callBack);
    }
  
    triger = (body)=>{
      body.addEventListener("click",this.callBack)
    }
  
   }
  
   export default TrigeredAction;
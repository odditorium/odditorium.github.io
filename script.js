var egg = new Egg();
egg.addCode("up,up,down,down,left,right,left,right,b,a", function() {
  window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  })
  .addHook(function(){
    console.log("Hook called for: " + this.activeEgg.keys);
    console.log(this.activeEgg.metadata);
  }).listen();
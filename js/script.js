var input_box=document.createElement("input");

var words = [
    
];
   
var words_ul=document.createElement("ul");
words_ul.textContent="words list";
words_ul.setAttribute("id", "words_here");

input_box.addEventListener("keydown", function(event){
      if(event.keyCode===13){
         var element=document.createElement("li");
         element.textContent=this.value;
         this.value = null;
        element.style.backgroundColor="lightgrey";
        element.style.fontSize="20px";
   
    
    if(words_ul.childElementCount === 0){
              words_ul.appendChild(element);

    }else if(words_ul.childElementCount > 0){
        words_ul.children[0].parentElement.insertBefore(element,words_ul.children[0]);    
    }
    
    
    
    element.addEventListener("dblclick", function(event){
                 if(event.type === 'dblclick'){
                        this.remove();
                 };
         });
         

      };
});
 

 for(var i=0; i<words.length; i++){
        var words_list=document.createElement("li");
        words_list.textContent=words[i];
        words_ul.appendChild(words_list);
 
 
    };
//  var random_word=function(event){
//      var mixed_words;
//      mixed_words=words[Math.round(Math.random()*words.length)];
//      for(var i=0; i<)
//  };  

document.addEventListener("DOMContentLoaded", function(event){
 document.body.appendChild(input_box);
    input_box.placeholder="Enter 3 letter words";
 document.body.appendChild(words_ul);
    // words_ul.appendChild(words_list);
   
 });
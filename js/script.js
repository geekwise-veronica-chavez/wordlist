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
    
var random_bar=document.createElement("input");
 var mixed_words=[   
    "hit",
    "low",
    "you",
    "hot",
    "get"
    ];
var large_array=[];
    random_bar=mixed_words[Math.floor(Math.random()*mixed_words.length)];
   for(var i=0; i<mixed_words.length; i++){
     var letter_array=mixed_words[i].split('');
     large_array.push(letter_array);
   };
   
   var shuffle=function(shufflewords){
       for( var i=large_array.length-1; i>0; i--){
           var random_letter=Math.floor(Math.random()*(i+1));
           
       };
   };
   
//  var shuffle =function(shufflewords){
//      for(var i=large_array.length-1; i>0; i--){
//      var random_letter=Math.floor(Math.random()*(i+1));
//       var shuffle=large_array[i];
//         large_array[i]=large_array[random_letter];
//      };
//   if(large_array.toString().replace(/\,/gi,'')===mixed_words){
//       return shuffle(large_array);
//   }else{
//       return shuffle.toString().replace(/\,/gi,'');
//   }
       
   // letter_array=mixed_words[i].split('').sort();
    // console.log(letter_array);
  
     
    //  console.log(letter_array);
    //  letter_array[i] = Math.round(Math.random()*letter_array[i]);
      
    //   return letter_array;
      
  
//};





document.addEventListener("DOMContentLoaded", function(event){
shuffle();

document.body.appendChild(random_bar);
document.body.appendChild(input_box);
input_box.placeholder="Enter 3 letter words";
document.body.appendChild(words_ul);
 
 
  
  });s
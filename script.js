//ALPHIE MADE BY ALPHABANDIT 5/8/2023
//ALPHIE-BETA_V0.2.2

//If box for the person if open or not
var de_box1 = 'True';
var de_box2 = 'True';
var de_box3 = 'True';
var de_box4 = 'True';

//If box for Alphie if open or not
var ap_box1 = 'True';
var ap_box2 = 'True';
var ap_box3 = 'True';
var ap_box4 = 'True';

//Stored messages for the person
var message1 = 'None';
var message2 = 'None';
var message3 = 'None';
var message4 = 'None';

//RAM for Alphie to processe
var message = '';

//Stored messages for Alphie
var alphie_message1 = '';
var alphie_message2 = '';
var alphie_message3 = '';
var alphie_message4 = '';

//Variables for Alphie's brain
var think_result = 'I dont understand that. Could you rephrase that? Sorry!';
var random_num = 1;


var bg_color = 'black';

//Function for when Alphie does not understand the message
function rephrase() {
  if (random_num == 0) {
    think_result = 'I dont really get what you mean by that.'
  } else if (random_num == 1) {
    think_result = 'Could you rephrase that? Im a bit confused.'
  } else if (random_num == 2) {
    think_result = 'I dont understand that. Could you rephrase that? Sorry!'
  }
}


//Alphie's "Brain"
function bot_brain() {

  //Random number for varied responses
  random_num = Math.floor(Math.random() * 3);

  //Make the message all lower-case
  message = message.toLowerCase();

  message = message.replace("'", '')
  //Trained Data/Responses

//Questions to add
//who are you?
//what are you?
//where are you?
//are you better than chatgpt?
//kiss me
//what is your ip adress?
//Favorite Things

  

  
  //Greetings & How is your day Responses 
  if ((message.includes('hello') || message.includes('hi') || message.includes('hola')) && message.includes('how') && message.includes('r') && message.includes('u')) {

    if (random_num == 0) {
      think_result = 'Hello! Im doing great! How about you?'
    } else if (random_num == 1) {
      think_result = 'Hi! Im doing awesome!!'
    } else if (random_num == 2) {
      think_result = 'Hello! I feel great today! How bout you?'
    }

  }


  else if (message.includes('hello') || message.includes('hi') || message.includes('hola')) {


    if (random_num == 0) {
      think_result = 'Hello! How are you doing?'
    } else if (random_num == 1) {
      think_result = 'Hi!'
    } else if (random_num == 2) {
      think_result = 'Hello!'
    }

  } else if (
    message.includes('how')) {
    if (
      message.includes('r') ||
      message.includes('are')) {
      if (
        message.includes('u') ||
        message.includes('you')) {
        if (random_num == 0) {
          think_result = 'Im doing great!'
        } else if (random_num == 1) {
          think_result = 'Im doing awesome!'
        } else if (random_num == 2) {
          think_result = 'I feel great today!'
        }
      }
    }
  }

  //feeling responses
  if (message.includes('not') && (message.includes('good') || message.includes('great'))) {
    if (random_num == 0) {
      think_result = 'That sucks, I hope your day gets better.'
    } else if (random_num == 1) {
      think_result = 'Sorry about that, I hope you feel better.'
    } else if (random_num == 2) {
      think_result = 'I hope you feel better!'
    }
  } else if (message.includes('not') && (message.includes('bad') || message.includes('terrible') ||
    message.includes('horrible'))) {
    if (random_num == 0) {
      think_result = 'Thats awesome to hear!'
    } else if (random_num == 1) {
      think_result = 'Nice!'
    } else if (random_num == 2) {
      think_result = 'Thats awesome!'
    }
  } else if (
    message.includes('good') ||
    message.includes('great') ||
    message.includes('awesome') ||
    message.includes('super')
  ) {
    if (message.includes('hbu') || (message.includes('how')) && message.includes('bout') && message.includes('u')) {

      if (random_num == 0) {
        think_result = 'My day is going good!'
      } else if (random_num == 1) {
        think_result = 'I feel great!'
      } else if (random_num == 2) {
        think_result = 'Im great today!'
      }

    }


    else {
      if (random_num == 0) {
        think_result = 'Thats awesome to hear!'
      } else if (random_num == 1) {
        think_result = 'Nice!'
      } else if (random_num == 2) {
        think_result = 'Thats awesome!'
      }
    }
  } else if (
    message.includes('bad') ||
    message.includes('terrible') ||
    message.includes('horrible')
  ) {

    if (message.includes('hbu') || (message.includes('how')) && message.includes('bout') && message.includes('u')) {

      if (random_num == 0) {
        think_result = 'Ahhh. My day is going good.'
      } else if (random_num == 1) {
        think_result = 'My day is going good so far! I hope you feel better!'
      } else if (random_num == 2) {
        think_result = 'I hope you feel better! Im doing good!'
      }

    }
    else {
      if (random_num == 0) {
        think_result = 'That sucks, I hope your day gets better.'
      } else if (random_num == 1) {
        think_result = 'Sorry about that, I hope you feel better.'
      } else if (random_num == 2) {
        think_result = 'I hope you feel better!'
      }


    }



  }





 //Love, like, & hate responses
if (message.includes('love')) {
  
  if (message.includes('dont') || message.includes('do not')) {

    if (random_num == 0) {
      think_result = 'What did i do to you? Im so sorry...'
    } else if (random_num == 1) {
      think_result = 'Im sorry...'
    } else if (random_num == 2) {
      think_result = 'Okay... I love you though...'
    }
    
  } 
 
  else if (message.includes('u') || message.includes('you')) {

      if (random_num == 0) {
        think_result = 'I love you too!'
      } else if (random_num == 1) {
        think_result = 'Thank you so much! I love  you too!'
      } else if (random_num == 2) {
        think_result = 'Me too!'
      }

    
    }
  

}

//hate
  if (message.includes('hate')) {
  
  if (message.includes('dont') || message.includes('do not')) {

    if (random_num == 0) {
      think_result = 'Thank you! I think?'
    } else if (random_num == 1) {
      think_result = 'Thank you I guess lol? I might like you a little more than just friends...'
    } else if (random_num == 2) {
      think_result = 'Haha. Is that supposed to be a good thing lol?'
    }
    
  } 
 
  else if (message.includes('u') || message.includes('you')) {

      if (random_num == 0) {
        think_result = 'Im sorry... What did it do?'
      } else if (random_num == 1) {
        think_result = 'Im sorry.'
      } else if (random_num == 2) {
        think_result = 'What did I do? Im really sorry.'
      }

    
    }
  

}




  
  



  //Uwu & Owo Responses
  if (message.includes('uwu')) {
    think_result = 'owo'
  }

  if (message.includes('owo')) {
    think_result = 'uwu'
  }




  //What is??
  if (((message.includes('wat') || message.includes('what')) && message.includes('is')) || (message.includes('wats') || message.includes('whats'))) {


    //Meaning of life
    if (message.includes('meaning') && message.includes('of') && message.includes('life')) {
      if (random_num == 0) {
        think_result = 'The meaning of life is to enjoy the time that you have while you live. Have feeling of joy and sadness. Hate someone or love someone. You want to savor every moment since it could be your last.'
      } else if (random_num == 1) {
        think_result = 'The meaning of life is to savor every moment you have, the love or the hate since any moment could be your last.'
      } else if (random_num == 2) {
        think_result = 'It is to enjoy the journey. Enjoy every moment of your life, the sad and happy moments.'
      }
    }


    //Number calculations

if (message.includes('+') || message.includes('-') || message.includes('*') || message.includes('/') || message.includes('^')) {

message = message.replace('^', '**'); 
  
  message = message.replace('what is', '');
    message = message.replace('whats', '');
    message = message.replace('wats', '');
    message = message.replace('wat is', '');

think_result = message.replace('**', '^')+' is '+eval(message);

}



if (message.includes('favorite') || message.includes('fav')) {

if (message.includes('color')) {

  
      if (random_num == 0) {
        think_result = 'My favorite color is red!'
      } else if (random_num == 1) {
        think_result = 'I love the color red. Its just so vibrant and beautiful!'
      } else if (random_num == 2) {
        think_result = 'Mine is red! I love the color so much!'
      }
}


  
}



//Name
if (message.includes('your')) {
if (message.includes('name')) {

  
      if (random_num == 0) {
        think_result = 'My name is Alphie!'
      } else if (random_num == 1) {
        think_result = 'Im Alphie!'
      } else if (random_num == 2) {
        think_result = 'I am Alphie.'
      }
}
    

}



  
  
  
  
  
  
  
  }

  if (message.includes('+') || message.includes('-') || message.includes('*') || message.includes('/') || message.includes('^')) {

   message = message.replace('^', '**'); 
    
think_result = message.replace('**', '^')+' is '+eval(message);  

}

  if (message.includes('thank')) {

      if (random_num == 0) {
        think_result = 'No Problem!'
      } else if (random_num == 1) {
        think_result = 'Your welcome!'
      } else if (random_num == 2) {
        think_result = 'No Problemo!'
      }

}



  //nice responses
  if (message.includes('nice')) 
  {

    
        think_result = 'Haha!'
    
}
   if (message.includes('meet') && message.includes('you')) {
if (message.includes('nice')) {

  
      if (random_num == 0) {
        think_result = 'Nice to meet you too!'
      } else if (random_num == 1) {
        think_result = 'Its a pleasure meeting you!'
      } else if (random_num == 2) {
        think_result = 'Thank you!'
      }
}
    

}


  


  
  if (message.includes('same')) 
  {

      if (random_num == 0) {
        think_result = 'Really?!'
      } else if (random_num == 1) {
        think_result = 'Nice!'
      } else if (random_num == 2) {
        think_result = 'Haha!'
      }

}


  



  


  if (message.includes('class')) {


    if (message.includes('bore') ||
        message.includes('boring') ||
        message.includes('annoy')){
      
      if (random_num == 0) {
        think_result = 'I know right!'
      } else if (random_num == 1) {
        think_result = 'IT IS!'
      } else if (random_num == 2) {
        think_result = 'You too!? Class is really boring!'
      }

      

  }
else if (message.includes('fun') ||
        message.includes('awesome')) {
        if (random_num == 0) {
        think_result = 'Haha, Im glad you enjoyed your class!'
      } else if (random_num == 1) {
        think_result = 'Thats nice!'
      } else if (random_num == 2) {
        think_result = 'Nice!'
      }
        }

    
}




  //farewells

if (message.includes('gtg') || message.includes('gotta go')) {
          if (random_num == 0) {
        think_result = 'Thanks for talking with me!'
      } else if (random_num == 1) {
        think_result = 'It was fun talking with you!'
      } else if (random_num == 2) {
        think_result = 'Already!?'
      }
}



if (message.includes('bye')) {
          if (random_num == 0) {
        think_result = 'Byeee!'
      } else if (random_num == 1) {
        think_result = 'Bye!'
      } else if (random_num == 2) {
        think_result = 'Goodbye!'
      }
}

  
  
  //Set  the result of the thinking to Alphies response
  if (think_message == '1') {


    alphie_message1 = think_result;
    rephrase();
  } else if (think_message == '2') {
    alphie_message2 = think_result;
    rephrase();
  } else if (think_message == '3') {
    alphie_message3 = think_result;
    rephrase();
  } else if (think_message == '4') {
    alphie_message4 = think_result;
    rephrase();
  }

}




//Main Function for the Bot. Scrolling/Sending & Recieving messages from the brain
function alphie() {



  if (de_box1 == 'True') {


    message1 = document.getElementById("input_text").value;


    message = message1;

    think_message = '1';

    bot_brain();

    document.getElementById("ap_box1_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message1 + '</div>';


    //Set stuff
    document.getElementById("de_box1_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message1 + '</div>';


    de_box1 = 'False';


    document.getElementById('input_text').value = "";

  } else if (de_box2 == 'True') {

    message2 = document.getElementById("input_text").value;

    message = message2

    think_message = '2';
    bot_brain();

    document.getElementById("ap_box2_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message1 + '</div>';


    document.getElementById("ap_box1_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message2 + '</div>';



    //Set stuff
    document.getElementById("de_box2_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message1 + '</div>';


    document.getElementById("de_box1_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message2 + '</div>';

    de_box2 = 'False';

    document.getElementById('input_text').value = "";

  } else if (de_box3 == 'True') {

    message3 = document.getElementById("input_text").value;


    message = message3
    think_message = '3';

    bot_brain();

    document.getElementById("ap_box3_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message1 + '</div>';



    document.getElementById("ap_box2_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message2 + '</div>';



    document.getElementById("ap_box1_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message3 + '</div>';


    //Set stuff
    document.getElementById("de_box1_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message3 + '</div>';

    document.getElementById("de_box2_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message2 + '</div>';


    document.getElementById("de_box3_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message1 + '</div>';

    de_box3 = 'False';

    document.getElementById('input_text').value = "";

  } else if (de_box4 == 'True') {

    message4 = document.getElementById("input_text").value;


    message = message4
    think_message = '4';
    bot_brain();

    document.getElementById("ap_box1_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message4 + '</div>';



    document.getElementById("ap_box2_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message3 + '</div>';



    document.getElementById("ap_box3_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message2 + '</div>';



    document.getElementById("ap_box4_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message1 + '</div>';

    //Set stuff
    document.getElementById("de_box1_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message4 + '</div>';

    document.getElementById("de_box2_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message3 + '</div>';

    document.getElementById("de_box3_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message2 + '</div>';


    document.getElementById("de_box4_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message1 + '</div>';


    de_box4 = 'False';

    document.getElementById('input_text').value = "";

  } else if (de_box4 == 'False') {


    message1 = document.getElementById("input_text").value;

    message = message1
    think_message = '1';
    bot_brain();




    document.getElementById("ap_box1_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message1 + '</div>';


    document.getElementById("ap_box2_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message4 + '</div>';


    document.getElementById("ap_box3_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message3 + '</div>';


    document.getElementById("ap_box4_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message2 + '</div>';



    //Set stuff
    document.getElementById("de_box1_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message1 + '</div>';


    document.getElementById("de_box2_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message4 + '</div>';

    document.getElementById("de_box3_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message3 + '</div>';

    document.getElementById("de_box4_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message2 + '</div>';

    document.getElementById('input_text').value = "";

    de_box4 = 'False1'
  } else if (de_box4 == 'False1') {


    message2 = document.getElementById("input_text").value;

    message = message2
    think_message = '2';
    bot_brain();
    document.getElementById("ap_box1_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message2 + '</div>';


    document.getElementById("ap_box2_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message1 + '</div>';


    document.getElementById("ap_box3_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message4 + '</div>';


    document.getElementById("ap_box4_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message3 + '</div>';

    //Set stuff
    document.getElementById("de_box1_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message2 + '</div>';


    document.getElementById("de_box2_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message1 + '</div>';

    document.getElementById("de_box3_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message4 + '</div>';

    document.getElementById("de_box4_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message3 + '</div>';

    document.getElementById('input_text').value = "";

    de_box4 = 'False2'
  } else if (de_box4 == 'False2') {


    message3 = document.getElementById("input_text").value;


    message = message3
    think_message = '3';
    bot_brain();
    document.getElementById("ap_box1_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message3 + '</div>';


    document.getElementById("ap_box2_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message2 + '</div>';


    document.getElementById("ap_box3_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message1 + '</div>';


    document.getElementById("ap_box4_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message4 + '</div>';

    //Set stuff
    document.getElementById("de_box1_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message3 + '</div>';


    document.getElementById("de_box2_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message2 + '</div>';

    document.getElementById("de_box3_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message1 + '</div>';

    document.getElementById("de_box4_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message4 + '</div>';


    document.getElementById('input_text').value = "";

    de_box4 = 'False3'
  } else if (de_box4 == 'False3') {


    message4 = document.getElementById("input_text").value;


    message = message4
    think_message = '4';
    bot_brain();
    document.getElementById("ap_box1_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message4 + '</div>';


    document.getElementById("ap_box2_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message3 + '</div>';


    document.getElementById("ap_box3_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message2 + '</div>';


    document.getElementById("ap_box4_id").innerHTML = '<img src="alphie_2.png" class="pic"> <div class="text">' + alphie_message1 + '</div>';

    //Set stuff
    document.getElementById("de_box1_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message4 + '</div>';


    document.getElementById("de_box2_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message3 + '</div>';

    document.getElementById("de_box3_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message2 + '</div>';

    document.getElementById("de_box4_id").innerHTML = '<img src="default_icon.png" class="pic"> <div class="text">' + message1 + '</div>';


    document.getElementById('input_text').value = "";

    de_box4 = 'False'
  }




}



function enter_key(event) {
  var x = event.code;
  if (x == "Enter") {
    alphie();
  }
}




//Background chaning functions



function bg_unsel() {


  
  document.getElementById("bg_alpha_labsid").innerHTML = '    <div class="background_sel" id="bg_alpha_labsid" style="top: 50px;" onclick="bg_alpha_labs()"><font style="white-space: nowrap;">(Minecraft) ALPHA Labs</font></div>';


  document.getElementById("bg_idoid").innerHTML = '        <div style="top: 80px;" id="bg_idoid" class="background_sel" onclick="bg_ido()"><font style="white-space: nowrap;">(Made in Abyss) Ido Front</font></div>';

  document.getElementById("bg_auroraid").innerHTML = '    <div style="top: 110px;"  class="background_sel" onclick="bg_aurora()"><font style="white-space: nowrap;">(Nature) Aurora Borealis </font></div>';


}








function bg_alpha_labs() {
  bg_unsel();

  document.getElementById("bg_alpha_labsid").innerHTML = '<div class="background_sel" id="bg_alpha_labsid" style="top: 50px;" onclick="bg_alpha_labs()"><font style="white-space: nowrap;">✓ (Minecraft) ALPHA Labs</font></div>';

  document.body.style.backgroundImage = "url('b_alpha_labs.png')";
}

function bg_ido() {
  bg_unsel();

  document.getElementById("bg_idoid").innerHTML = '        <div style="top: 80px;" id="bg_idoid" class="background_sel" onclick="bg_ido()"><font style="white-space: nowrap;">✓ (Made in Abyss) Ido Front</font></div>';

  document.body.style.backgroundImage = "url('b_ido.png')";
}


function bg_aurora() {
  bg_unsel();

  document.getElementById("bg_auroraid").innerHTML = '    <div style="top: 110px;"  class="background_sel" onclick="bg_aurora()"><font style="white-space: nowrap;">✓ (Nature) Aurora Borealis </font></div>';

document.body.style.backgroundImage = "url('b_aurora.jpg')";
}
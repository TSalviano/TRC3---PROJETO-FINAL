var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var user = {message:""};


function chatbotResponse(userMessage){
    
    var chatbotMessage = "";

    if(userMessage == "Oi"){

        chatbotMessage = "Olá, sou o Bot de autoatendimento do Guia do Calouro, no que posso ajudar?";
    }

    else{

        chatbotMessage = "Desculpe, eu ainda não sei responder isso.";

    }

var messageElement = document.createElement('div')
messageElement.innerHTML = "<span style='color: white;'> <b> Guia do Calouro:</b> </span>"+
                            "<span style='color: white;'>"+chatbotMessage+"</span>";
                            messageElement.style.backgroundColor = "#11283a";
                        


    setTimeout(()=>{
        messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000})
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    },1000)

    

}

function sendMessage(userMessage){

   var messageElement =  document.createElement('div');
   messageElement.style.textAlign ="right";
   messageElement.style.margin = "10px";

   messageElement.innerHTML = "<span><b>Calouro:</b> </span>"+
                              "<span>" +userMessage+"</span>";

    chatContainer.appendChild(messageElement);

}

sendBtn.addEventListener('click',function(e){

    var userMessage = textbox.value;

   if(userMessage == ""){
        alert('Escreva uma mensagem');
   }else{

    let userMessageText = userMessage.trim();
    user.userMessage = userMessageText;
    textbox.value = "";
    sendMessage(userMessageText);
    chatbotResponse(userMessageText);

   }
})
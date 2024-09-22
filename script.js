let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Moring Sir")
    }

    else if(hours>=12 && hours<16){
        speak("Good afternoon sir")
    }

    else{
        speak("Good evening Sir")
    }
}

// window.addEventListener('load',()=>{
//     wishMe()
// })

let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
    
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hi")){
        speak("hello sir,How can i help you?")
    }

    else if(message.includes("who are you")){
        speak("I am jarvis,a virtual assistant,created by Jyotiraditya Swain")
    }

    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("Open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }

    else if(message.includes("Open gmail")){
        speak("opening gmail...")
        window.open("https://gmail.com/","_blank")
    }

    else if(message.includes("Open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }

    else if(message.includes("Open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }

    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
       
    }

    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
       
    }


    else{
        let finalText="this is what i found on internet regarding"+ message.replace("jarvis","") || message.replace("Zarvis","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Jarvis","")}`,"_blank")
    }
}
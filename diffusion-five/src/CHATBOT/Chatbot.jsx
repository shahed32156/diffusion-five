import React from 'react'


import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial, Helvetica, sans-serif',
  headerBgColor: '#9b17d8',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#9b17d8',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Hello, welcome to Diffusion five. What is your name?',
    trigger: '2'
  },


  {
    id: '2',
    user:true,
    trigger: '3'
  },

  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you. Please select which service are you willing to take?',
    trigger: '4'
  },

  {
    id: '4',
    options: [
      
      {
     
        value: "Web Design & Development",
        label: "Web Design & Development",
        trigger: "Web Design & Development"

      },

      {
     
        value: "Graphix Design",
        label: "Graphix Design",
        trigger: "Graphix Design"

      },

      {
     
        value: "Artificial Inteligence",
        label: "Artificial Inteligence",
        trigger: "Artificial Inteligence"

      },

      {
     
        value: "Digital Marketing",
        label: "Digital Marketing",
        trigger: "Digital Marketing"

      },

      {
     
        value: "Video Editing",
        label: "Video Editing",
        trigger: "Video Editing"

      },


],
    
  },

  {

    id: "Web Design & Development",
    message: "Thanks for select your prefer Web Design & Development service. Book your service now from our website.",
    end: true
  },

  {

    id: "Graphix Design",
    message: "Thanks for select your prefer Graphix Design service. Book your service now from our website.",
    end: true
  },

  {

    id: "Artificial Inteligence",
    message: "Thanks for select your prefer Artificial Inteligence service. Book your service now from our website.",
    end: true
  },

  {

    id: "Digital Marketing",
    message: "Thanks for select your prefer Digital Marketing service. Book your service now from our website.",
    end: true
  },

  {

    id: "Video Editing",
    message: "Thanks for select your prefer Video Editing service. Book your service now from our website.",
    end: true
  },


 
  
];



const Chatbot = () => {
  return (
    <>
  

<ThemeProvider theme={theme}>
      <ChatBot steps={steps} floating={true} 
      headerTitle="Diffusion Five Chatbot"
      recognitionEnable={true}
      speechSynthesis={{ enable: true, lang: 'en' }}
      
      />
      
    </ThemeProvider>

    
    </>
  )
}

export default Chatbot

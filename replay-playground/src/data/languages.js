import React from 'react';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';


export const languages = {

    spanish:{
        header:{
            title:"Replay!",
            subtitle:"Playground para HTML y CSS",
            guideMenu:{
                buttonTitle:"Guías",
                modalTitle:"✨ Guías de programación ✨",
                modalSubtitle:"Aprendé de la mano de contenido teórico creado especialmente para los que recién empiezan.",
                menuItems:[
                    {
                        name:"📚  Introducción a la programación",
                        link:"",
                        available:false,
                    },
                    {
                        name:"📚  Diseño web básico",
                        link:"",
                        available:false,
                    },
                    {
                        name:"📚  HTML",
                        link:"https://www.notion.so/marina-ziembar/HTML5-ee5e113bd83e421094a79573bf97068e",
                        available:true,
                    },
                    {
                        name:"📚  CSS",
                        link:"https://www.notion.so/marina-ziembar/CSS3-bf5db88e813d44f88c3bbe6d6ba09d5b",
                        available:true,
                    },
                    {
                        name:"📚  Trabajar en programación",
                        link:"",
                        available:false,
                    },
                ]
            },
            helpModal:{
                buttonTitle:"Ayuda",
                title:"🔌 Preguntas frecuentes 🔌",
                content:[
                    {
                        question:"📌 Qué es un playground?",
                        answer:"Los playgrounds son como IDE's muy simples para practicar HTML y CSS jugando. Es más visual y muy útil para practicar conceptos básicos.",
                    },
                    {
                        question:"📌 Cómo se usa el Playground?",
                        answer:"Muy fácil! Donde dice html, escribis HTML. Donde dice CSS, escribís CSS. Y en la pantalla grande de la derecha, vas a ver la vista previa de lo que estás escribiendo. Así de fácil!",
                    },
                    {
                        question:"📌 Hay cosas que no me acuerdo o no sé aplicar. Por donde empiezo?",
                        answer:"No pasa nada! Si estás muy perdido, o necesitas apoyo teórico podés revisar las guías teóricas disponibles en el menu.",
                    },
                ]
            }
        },
        footer:{
            copyright:"Replay Playground © 2022. Todos los derechos reservados.",
            attributes:"Hecho con amor por Mar!na",
            rrss:[
                {
                    name: "github",
                    link: "https://github.com/MarinaZiembar",
                    icon: github,
                },
                {
                    name: "linkedin",
                    link: "https://www.linkedin.com/in/marina-ziembar/",
                    icon: linkedin,
                },
            ],
        }
    },

    english:{
        header:{
            title:"Replay!",
            subtitle:"HTML & CSS Playground",
            guideMenu:{
                buttonTitle:"Guides",
                modalTitle:"✨ Programming guides ✨",
                modalSubtitle:"All the theory needed to learn the basics, specially created for those who are just starting to code.",
                menuItems:[
                    {
                        name:"📚  Programming 101",
                        link:"",
                        available:false,
                    },
                    {
                        name:"📚  Web design 101",
                        link:"",
                        available:false,
                    },
                    {
                        name:"📚  HTML",
                        link:"https://www.notion.so/marina-ziembar/HTML5-ee5e113bd83e421094a79573bf97068e",
                        available:true,
                    },
                    {
                        name:"📚  CSS",
                        link:"",
                        available:false,
                    },
                    {
                        name:"📚  Getting a job in web development",
                        link:"",
                        available:false,
                    },
                ]
            },
            helpModal:{
                buttonTitle:"Help",
                title:"🔌 FAQ's 🔌",
                content:[
                    {
                        question:"📌 What's a Playground?",
                        answer:"Playgrounds are like IDE's; the simplest way to practice coding. It's a very useful and visual tool to learn the basics.",
                    },
                    {
                        question:"📌 How do you use a Playground?",
                        answer:"Easy! Below the HTML title, you write HTML and below the CSS title you just write... correct, CSS! Then you can easily visualize your code in the preview window at your right. And that's it!",
                    },
                    {
                        question:"📌 I'm struggling with all this concepts, what should I do?",
                        answer:"Don't worry! If you are lost or need backup theory to keep learining, you can visit our programming guides. Unfortunately, they're just available in spanish right now, but they'll be translated in no time!",
                    },
                ]
            }
        },
        playground:{
    
        },
        footer:{
            copyright: "Replay Playground © 2022. All rights reserved",
            attributes: "Made with love by Mar!na",
            rrss:[
                {
                    name: "github",
                    link: "https://github.com/MarinaZiembar",
                    icon: github,
                },
                {
                    name: "linkedin",
                    link: "https://www.linkedin.com/in/marina-ziembar/",
                    icon: linkedin,
                },
            ],
        }
    }
}


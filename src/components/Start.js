import React from 'react'
import iettLogo from "../assets/iett-logo.png"

export default function Start() {

     window.onload = () => {
        let enterName = prompt("Lütfen adınızı ve soy adınızı giriniz..");
        document.querySelector("h2").innerHTML+=`Hoşgeldiniz, sayın ${enterName} başlamak için lütfen sayfanın üst kısmındaki butona tıklayınız.`
    }

    return (
        <div className="start">
            <h2></h2>
            <img src={iettLogo}/>
        </div>
    )
}

import React from 'react'
import iettLogo from "../assets/iett-logo.png"

export default function Start() {

    let msg = prompt("Lütfen adınızı ve soyadınızı giriniz..");
    let guest = "Misafirimiz";

    return (
        <div className="start">
            <h2>Hoşgeldiniz, sayın <span id="guest">{msg || guest}</span>; <br/> Başlamak için lütfen sayfanın üst kısmındaki butona tıklayınız.</h2>
            <img src={iettLogo} alt="logo"/>
        </div>
    )
}

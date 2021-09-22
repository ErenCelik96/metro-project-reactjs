import React, { useState } from 'react'

export default function Form() {
    const [gDurak, setGdurak] = useState();
    const [bDurak, setBdurak] = useState();
    const [gYön, setGyön] = useState();
    const [item, setItem] = useState("....");


    function handleChange1(event) {
        setGdurak(event.target.value)
    }

    function handleChange2(event) {
        setBdurak(event.target.value)
    }

    function handleChange3(event) {
        setGyön(event.target.value)
    }
    
    function result() {
        if (gYön =="Kadıköy yönü") {
           setItem((bDurak-gDurak)*2);
        } else if (gYön =="Tavşantepe yönü") {
            setItem((gDurak-bDurak)*2);
        }
    }

    return (
        <div className="form d-flex align-items-center justify-content-center">
            <div className="form-container">
                <label for="exampleFormControlSelect1">Gidilecek Yön</label>
                <select name="gYön" onChange={handleChange3} className="form-control mb-5" id="exampleFormControlSelect1">
                    <option value="">Lütfen gitmek istediğiniz yönü seçiniz..</option>
                    <option value="Kadıköy yönü">Kadıköy yönü</option>
                    <option value="Tavşantepe yönü">Tavşantepe yönü</option>
                </select>
                <label for="exampleFormControlSelect1">Bulunduğunuz Durak</label>
                <select name="bDurak" onChange={handleChange2} className="form-control mb-5" id="exampleFormControlSelect1">
                    <option value="">Lütfen bulunduğunuz durağı seçiniz..</option>
                    <option value="1">Kadıköy</option>
                    <option value="2">Ayrılık Çeşmesi</option>
                    <option value="3">Acıbadem</option>
                    <option value="4">Ünalan</option>
                    <option value="5">Uzunçayır</option>
                    <option value="6">Göztepe</option>
                    <option value="7">Yenisahra</option>
                    <option value="8">Kozyatağı</option>
                    <option value="9">Bostancı</option>
                    <option value="10">Küçükyalı</option>
                    <option value="11">Maltepe</option>
                    <option value="12">Huzurevi</option>
                    <option value="13">Gülsuyu</option>
                    <option value="14">Esenkent</option>
                    <option value="15">Hastane Adliye</option>
                    <option value="16">Soğanlık</option>
                    <option value="17">Kartal</option>
                    <option value="18">Yakacık</option>
                    <option value="19">Pendik</option>
                    <option value="20">Tavşantepe</option>
                </select>
                <label for="exampleFormControlSelect1">Gidilecek Durak</label>
                <select name='gDurak' onChange={handleChange1} className="form-control mb-5" id="exampleFormControlSelect1">
                    <option value="">Lütfen gitmek istediğiniz durağı seçiniz..</option>
                    <option value="1">Kadıköy</option>
                    <option value="2">Ayrılık Çeşmesi</option>
                    <option value="3">Acıbadem</option>
                    <option value="4">Ünalan</option>
                    <option value="5">Uzunçayır</option>
                    <option value="6">Göztepe</option>
                    <option value="7">Yenisahra</option>
                    <option value="8">Kozyatağı</option>
                    <option value="9">Bostancı</option>
                    <option value="10">Küçükyalı</option>
                    <option value="11">Maltepe</option>
                    <option value="12">Huzurevi</option>
                    <option value="13">Gülsuyu</option>
                    <option value="14">Esenkent</option>
                    <option value="15">Hastane Adliye</option>
                    <option value="16">Soğanlık</option>
                    <option value="17">Kartal</option>
                    <option value="18">Yakacık</option>
                    <option value="19">Pendik</option>
                    <option value="20">Tavşantepe</option>
                </select>
                <button id="result-btn" type="button" onClick={() => result()}>SONUÇ</button>
                <p id="result" className="text-white">{item<0 ?  "Hatalı durak girişi! Lütfen tekrar deneyiniz.": `Ortalama ${item} dakika sonra gitmek istediğiniz durağa varacaksınız.`} <br /> İyi yolculuklar dileriz..</p>
            </div>
        </div>
    )
}

import React from 'react'

export default function Form() {


    return (
        <div className="form d-flex align-items-center justify-content-center">
            <div className="form-container">
                <label for="exampleFormControlSelect1">Gidilecek Yön</label>
                <select class="form-control mb-5" id="exampleFormControlSelect1">
                    <option>Kadıköy yönü</option>
                    <option>Tavşantepe yönü</option>
                </select>
                <label for="exampleFormControlSelect1">Bulunduğunuz Durak</label>
                <select class="form-control mb-5" id="exampleFormControlSelect1">
                    <option>Kadıköy</option>
                    <option>Ayrılık Çeşmesi</option>
                    <option>Acıbadem</option>
                    <option>Ünalan</option>
                    <option>Uzunçayır</option>
                    <option>Göztepe</option>
                    <option>Yenisahra</option>
                    <option>Kozyatağı</option>
                    <option>Bostancı</option>
                    <option>Küçükyalı</option>
                    <option>Maltepe</option>
                    <option>Huzurevi</option>
                    <option>Gülsuyu</option>
                    <option>Esenkent</option>
                    <option>Hastane Adliye</option>
                    <option>Soğanlık</option>
                    <option>Kartal</option>
                    <option>Yakacık</option>
                    <option>Pendik</option>
                    <option>Tavşantepe</option>
                </select>
                <label for="exampleFormControlSelect1">Gidilecek Durak</label>
                <select class="form-control mb-5" id="exampleFormControlSelect1">
                    <option>Kadıköy</option>
                    <option>Ayrılık Çeşmesi</option>
                    <option>Acıbadem</option>
                    <option>Ünalan</option>
                    <option>Uzunçayır</option>
                    <option>Göztepe</option>
                    <option>Yenisahra</option>
                    <option>Kozyatağı</option>
                    <option>Bostancı</option>
                    <option>Küçükyalı</option>
                    <option>Maltepe</option>
                    <option>Huzurevi</option>
                    <option>Gülsuyu</option>
                    <option>Esenkent</option>
                    <option>Hastane Adliye</option>
                    <option>Soğanlık</option>
                    <option>Kartal</option>
                    <option>Yakacık</option>
                    <option>Pendik</option>
                    <option>Tavşantepe</option>
                </select>
                <p id="result" class="text-white ">Ortalama .... dakika sonra ..... durağına varacaksınız.<br/> İyi yolculuklar dileriz..</p>
            </div>
        </div>
    )
}

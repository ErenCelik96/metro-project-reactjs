import React, { useState, useEffect } from 'react'

export default function Form() {
    const [item, setItem] = useState([]);
    const [gDurak, setGdurak] = useState();
    const [bDurak, setBdurak] = useState();
    const [gYön, setGyön] = useState();

    //////////////Fetch data.json
    useEffect(() => {
        fetch(`data.json`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => setItem(data));
    }, []);


    /////////////////////Gidilecek durak function
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
            console.log("yes");
           let sonuç = item.kadıköy_yönü;
            console.log(sonuç);
        }

    }


    return (
        <div className="form d-flex align-items-center justify-content-center">
            <div className="form-container">
                <label for="exampleFormControlSelect1">Gidilecek Yön</label>
                <select name="gYön" onChange={handleChange3} className="form-control mb-5" id="exampleFormControlSelect1">
                    <option value="Kadıköy yönü">Kadıköy yönü</option>
                    <option value="Tavşantepe yönü">Tavşantepe yönü</option>
                </select>
                <label for="exampleFormControlSelect1">Bulunduğunuz Durak</label>
                <select name="bDurak" onChange={handleChange2} className="form-control mb-5" id="exampleFormControlSelect1">
                <option value="1">Kadıköy</option>
                    <option value="Ayrılık Çeşmesi">Ayrılık Çeşmesi</option>
                    <option value="Acıbadem">Acıbadem</option>
                    <option value="Ünalan">Ünalan</option>
                    <option value="Uzunçayır">Uzunçayır</option>
                    <option value="Göztepe">Göztepe</option>
                    <option value="Yenisahra">Yenisahra</option>
                    <option value="Kozyatağı">Kozyatağı</option>
                    <option value="Bostancı">Bostancı</option>
                    <option value="Küçükyalı">Küçükyalı</option>
                    <option value="Maltepe">Maltepe</option>
                    <option value="Huzurevi">Huzurevi</option>
                    <option value="Gülsuyu">Gülsuyu</option>
                    <option value="Esenkent">Esenkent</option>
                    <option value="Hastane Adliye">Hastane Adliye</option>
                    <option value="Soğanlık">Soğanlık</option>
                    <option value="Kartal">Kartal</option>
                    <option value="Yakacık">Yakacık</option>
                    <option value="Pendik">Pendik</option>
                    <option value="Tavşantepe">Tavşantepe</option>
                </select>
                <label for="exampleFormControlSelect1">Gidilecek Durak</label>
                <select name='gDurak' onChange={handleChange1} className="form-control mb-5" id="exampleFormControlSelect1">
                    <option value="Kadıköy">Kadıköy</option>
                    <option value="Ayrılık Çeşmesi">Ayrılık Çeşmesi</option>
                    <option value="Acıbadem">Acıbadem</option>
                    <option value="Ünalan">Ünalan</option>
                    <option value="Uzunçayır">Uzunçayır</option>
                    <option value="Göztepe">Göztepe</option>
                    <option value="Yenisahra">Yenisahra</option>
                    <option value="Kozyatağı">Kozyatağı</option>
                    <option value="Bostancı">Bostancı</option>
                    <option value="Küçükyalı">Küçükyalı</option>
                    <option value="Maltepe">Maltepe</option>
                    <option value="Huzurevi">Huzurevi</option>
                    <option value="Gülsuyu">Gülsuyu</option>
                    <option value="Esenkent">Esenkent</option>
                    <option value="Hastane Adliye">Hastane Adliye</option>
                    <option value="Soğanlık">Soğanlık</option>
                    <option value="Kartal">Kartal</option>
                    <option value="Yakacık">Yakacık</option>
                    <option value="Pendik">Pendik</option>
                    <option value="Tavşantepe">Tavşantepe</option>
                </select>
                <button type="button" onClick={() => result()}>Submit</button>
                <p id="result" className="text-white ">Ortalama ...... dakika sonra {gDurak} durağına varacaksınız.<br /> İyi yolculuklar dileriz..</p>
            </div>
        </div>
    )
}

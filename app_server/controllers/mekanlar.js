const anaSayfa = function (req, res) {
    res.render('anasayfa',

     { "baslik":"Anasayfa",
     "sayfaBaslik":{
        "siteAd":"MekanBul",
        "slogan":"Civardaki Mekanları Keşfet!"
     },
    "mekanlar":[
       {
        "ad":"Starbucks",
        "puan":"5",
        "adres":"Centrum Garden AWM",
        "imkanlar":["Kahveler","Kurabiyeler","Pastalar"],
        "mesafe":"3km"
       },
       {
        "ad":"D'or Cafe",
        "puan":"3",
        "adres":"İyaşpark AVM Yanı",
        "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
        "mesafe":"4km"
       },
       {
        "ad":"Trigo Kafe",
        "puan":"2",
        "adres":"Modern Market Yanı",
        "imkanlar":["Dünya Kahveleri","Dünya Mutfağı","İçecekler"],
        "mesafe":"1km"
       }
     ]
    });
}

const mekanBilgisi = function (req, res) {
    res.render('mekanbilgisi',
    {"baslik":"Mekan Bilgisi",
    "mekanBaslik":"Starbucks",
    "mekanDetay":{
        "ad":"Starbucks",
        "puan":"5",
        "adres":"Centrum Garden AVM",
        "saatler":[
            {
            "gunler":"Pazartesi-Cuma",
            "acilis":"7:00",
            "kapanis":"23.00",
            "kapali": false
            },
            {
            "gunler":"Cumartesi-Pazar",
            "acilis":"8:00",
            "kapanis":"22.00",
            "kapali": false
            }
        ],
        "imkanlar":["Kahveler","Kurabiyeler","Pastalar"],
        "koordinatlar":{
            "enlem":"37.78175551463006",
            "boylam":"30.565071029913007"
        },
        "yorumlar":[
            {
            "yorumYapan":"Alperen Karslı",
            "yorumMetni":"Kahveler güzel",
            "tarih":"20 ekim 2022",
            "puan":"4"
            },
            {
                "yorumYapan":"Asım Sinan Yüksel",
                "yorumMetni":"berbaaaat",
                "tarih":"21 ekim 2022",
                "puan":"1"
                }
        ],

    }
});
}

const yorumEkle = function (req, res) {
    res.render('yorumekle', { title:'Yorum Sayfası'});
}

module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
};

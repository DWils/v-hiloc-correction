/* VARIABLE RECUPERATION GAMMES VEHICULES Allan*/

let moto = document.getElementById("moto");
let voiture = document.getElementById("voiture");
let camion = document.getElementById("camion");
let velo = document.getElementById("velo");
let vaisseau = document.getElementById("vaisseau");

/* VARIABLE RECUPERATION FORMULAIRE VEHICULES Allan**/

let moto1 = document.getElementById("moto1");
let voiture1 = document.getElementById("voiture1");
let camion1 = document.getElementById("camion1");
let velo1 = document.getElementById("velo1");
let vaisseau1 = document.getElementById("vaisseau1");

// CHANGEMENT COULEUR GAMMES VEHICULES Allan*

moto.addEventListener("click", () => {
  document.getElementById("voiture").src = "images/icons/Car-2.svg";
  document.getElementById("camion").src = "images/icons/Truck-2.svg";
  document.getElementById("moto").src = "images/icons/Dirt Bike-1.svg";
  document.getElementById("velo").src = "images/icons/Bicycle-2.svg";
  document.getElementById("vaisseau").src = "images/icons/Space Fighter-2.svg";
});

voiture.addEventListener("click", () => {
  document.getElementById("voiture").src = "images/icons/Car-1.svg";
  document.getElementById("camion").src = "images/icons/Truck-2.svg";
  document.getElementById("moto").src = "images/icons/Dirt Bike-2.svg";
  document.getElementById("velo").src = "images/icons/Bicycle-2.svg";
  document.getElementById("vaisseau").src = "images/icons/Space Fighter-2.svg";
});
camion.addEventListener("click", () => {
  document.getElementById("voiture").src = "images/icons/Car-2.svg";
  document.getElementById("camion").src = "images/icons/Truck-1.svg";
  document.getElementById("moto").src = "images/icons/Dirt Bike-2.svg";
  document.getElementById("velo").src = "images/icons/Bicycle-2.svg";
  document.getElementById("vaisseau").src = "images/icons/Space Fighter-2.svg";
});
velo.addEventListener("click", () => {
  document.getElementById("voiture").src = "images/icons/Car-2.svg";
  document.getElementById("camion").src = "images/icons/Truck-2.svg";
  document.getElementById("moto").src = "images/icons/Dirt Bike-2.svg";
  document.getElementById("velo").src = "images/icons/Bicycle.svg";
  document.getElementById("vaisseau").src = "images/icons/Space Fighter-2.svg";
});
vaisseau.addEventListener("click", () => {
  document.getElementById("voiture").src = "images/icons/Car-2.svg";
  document.getElementById("camion").src = "images/icons/Truck-2.svg";
  document.getElementById("moto").src = "images/icons/Dirt Bike-2.svg";
  document.getElementById("velo").src = "images/icons/Bicycle-2.svg";
  document.getElementById("vaisseau").src = "images/icons/Space Fighter-1.svg";
});

// CHANGEMENT COULEUR  VEHICULES Allan*

moto1.addEventListener("click", () => {
  document.getElementById("voiture1").src = "images/icons/Car-2.svg";
  document.getElementById("camion1").src = "images/icons/Truck-2.svg";
  document.getElementById("moto1").src = "images/icons/Dirt Bike-1.svg";
  document.getElementById("velo1").src = "images/icons/Bicycle-2.svg";
  document.getElementById("vaisseau1").src = "images/icons/Space Fighter-2.svg";
});

voiture1.addEventListener("click", () => {
    document.getElementById("voiture1").src = "images/icons/Car-1.svg";
    document.getElementById("camion1").src = "images/icons/Truck-2.svg";
    document.getElementById("moto1").src = "images/icons/Dirt Bike-2.svg";
    document.getElementById("velo1").src = "images/icons/Bicycle-2.svg";
    document.getElementById("vaisseau1").src = "images/icons/Space Fighter-2.svg";
});
camion1.addEventListener("click", () => {
    document.getElementById("voiture1").src = "images/icons/Car-2.svg";
    document.getElementById("camion1").src = "images/icons/Truck-1.svg";
    document.getElementById("moto1").src = "images/icons/Dirt Bike-2.svg";
    document.getElementById("velo1").src = "images/icons/Bicycle-2.svg";
    document.getElementById("vaisseau1").src = "images/icons/Space Fighter-2.svg";
});
velo1.addEventListener("click", () => {
    document.getElementById("voiture1").src = "images/icons/Car-2.svg";
    document.getElementById("camion1").src = "images/icons/Truck-2.svg";
    document.getElementById("moto1").src = "images/icons/Dirt Bike-2.svg";
    document.getElementById("velo1").src = "images/icons/Bicycle.svg";
    document.getElementById("vaisseau1").src = "images/icons/Space Fighter-2.svg";
});
vaisseau1.addEventListener("click", () => {
    document.getElementById("voiture1").src = "images/icons/Car-2.svg";
    document.getElementById("camion1").src = "images/icons/Truck-2.svg";
    document.getElementById("moto1").src = "images/icons/Dirt Bike-2.svg";
    document.getElementById("velo1").src = "images/icons/Bicycle-2.svg";
    document.getElementById("vaisseau1").src = "images/icons/Space Fighter-1.svg";
});

/*camions : Emmanuel et Marina*/

let trucktable = [
  {
    marque: "IVECO",
    modele: "S-Way",
    prix: 99,
  },
  {
    marque: "IVECO",
    modele: "Eurocargo",
    prix: 109,
  },
  {
    marque: "IVECO",
    modele: "Stralis X-Way",
    prix: 105,
  },
  {
    marque: "IVECO",
    modele: "Trakker",
    prix: 88,
  },
];

function loadtruck() {
  document.getElementById("vehicules").innerHTML = "";

  trucktable.map((truck) => {
    let marque = truck.marque;
    let modele = truck.modele;
    let prix = truck.prix;

    let structureTruck = `
    <div class="mx-5 clio-card">
        <img src="images/vehicles/trucks/${modele}.png" width="200" alt="camion">
        <p>
            <h4>${(marque)} ${(modele)}</h4>
            à partir de ${prix}€
        </p>
    </div>
`;
    document.getElementById("vehicules").innerHTML += structureTruck;
  });
}
document.getElementById("camion").addEventListener("click",(e) =>{
  loadtruck()
}) ;

/*motos : Dalian*/
let dirttable = [
  {
    marque: "Suzuki",
    modele: "Hayabusa",
    prix: 250,
  },
  {
    marque: "Yamaha",
    modele: "MT-10",
    prix: 230,
  },
  {
    marque: "Kawaksi",
    modele: "Ninja",
    prix: 120,
  },
  {
    marque: "Kawaksi",
    modele: "gn",
    prix: 100,
  },
];

function loaddirt() {
  document.getElementById("vehicules").innerHTML = "";

  dirttable.map((dirt) => {
    let marque = dirt.marque;
    let modele = dirt.modele;
    let prix = dirt.prix;

    let structureDirt = `
    <div class="mx-5 clio-card">
        <img src="images/vehicles/motorbikes/${modele}.png" width="200" alt="moto">
        <p>
        <h4>${(marque)} ${(modele)}</h4>
            à partir de ${prix}€
        </p>
    </div>
`;
    document.getElementById("vehicules").innerHTML += structureDirt;
  });
}
document.getElementById("moto").addEventListener("click",(e) =>{
  loaddirt()
}) ;



/*vélos François*/

let velotable = [
  {
    marque: "Peugeot ",
    modele: "Lr01",
    prix: 50,
  },
  {
    marque: "Wayscral",
    modele: "Anyway e200",
    prix: 150,
  },
  {
    marque: "Cloot",
    modele: "Project level x rotor",
    prix: 25,
  },
  {
    marque: "Cipollini",
    modele: "Dolomia",
    prix: 250,
  },
];

function loadvelo() {
  document.getElementById("vehicules").innerHTML = "";

  velotable.map((velo) => {
    let marque = velo.marque;
    let modele = velo.modele;
    let prix = velo.prix;

    let structureVelo = `
      <div class="mx-5 clio-card">
          <img src="images/vehicles/bicycles/${modele}.png" width="200" alt="vélo">
          <p>
              <h4>${(marque)} ${(modele)}</h4>
              à partir de ${prix}€
          </p>
      </div>
  `;
    document.getElementById("vehicules").innerHTML += structureVelo;
  });
}
document.getElementById("velo").addEventListener("click",(e) =>{
  loadvelo()
});


/*vaisseaux : Thierry*/

let vaisseaux = [
  {
    marque: "Starwars",
    modele: "Faucon",
    prix: 5000,
  },
  {
    marque: "Starwars",
    modele: "Tie Fighter",
    prix: 2500,
  },
  {
    marque: "Starwars",
    modele: "X Wing",
    prix: 2700,
  },
  {
    marque: "Starwars",
    modele: "Nubian",
    prix: 2200,
  },
];

function loadvaisseaux() {
  document.getElementById("vehicules").innerHTML = "";

  vaisseaux.map((vaisseau) => {
    let marque = vaisseau.marque;
    let modele = vaisseau.modele;
    let prix = vaisseau.prix;

    let structureVaisseaux = `
    <div class="mx-5 clio-card">
        <img src="images/vehicles/spaceships/${modele}.webp" width="200" alt="vaisseau spatial">
        <p>
            <h4>${(marque)} ${(modele)}</h4>
            à partir de ${prix}€
        </p>
    </div>
`;
    document.getElementById("vehicules").innerHTML += structureVaisseaux;
  });
}
document.getElementById("vaisseau").addEventListener("click",(e) =>{
  loadvaisseaux()
}) ; 


/*voitures : Yohann, Jérôme et Valentin. Ce code n'est pas opérationnel car la méthode est différente de celle utilisée dans le reste du document*/

let voitures = [
  {
      nom: "fiat 500",
      couleur: ["gris", "blanc"],
      prix: { location: 70, vente: 19000 },
      href: "images/vehicles/cars/fiat500.png",
  },
  {
      nom: "mclaren ",
      couleur: ["couleur starsky", "noir "],
      prix: { location: 1670, vente:150000 },
      href: "images/vehicles/cars/mclaren.png",
  },
  {
      nom: "subaru",
      couleur: ["rouge", "noir "],
      prix: { location: 150, vente: 16900 },
      href: "images/vehicles/cars/subaru.png",
  },
  {
      nom: "mercedes classe-c ",
      couleur: ["blanc", "noir "],
      prix: { location: 150, vente: 62000 },
      href: "images/vehicles/cars/mercedes.png",

  },


];

function voitureRefresh() {
  let garage = document.querySelector("#garage");
  garage.innerHTML = "";
  let taille = `"80px"`

  voitures.map((voiture) => {
      let card = `
      <div class="voiture" >
          <img 
              src=" ${voiture.href}"
              class="img1 dflex d-inline" alt="voiture">
          <p>
              <h4>${voiture.nom}</h4>
              à partir de ${voiture.prix.vente}€ a la vente <br> location ${voiture.prix.location} 
          </p>
      </div>
  `;
      garage.innerHTML += card;
  })
}






import PiggyBank from './imgproject/logobanque.png'
import JeuDesPaires from './imgproject/logoJDP.png'
import Norimmo from './imgproject/imagenorimmo.jpg'
import Terre2Geek from './imgproject/logoT2G.png'
import StarWars from './imgproject/logostarwars.png'


// const projectsList = ["Piggy_Bank", "Jeu_Des_Paires", "NorImmo", "Terre2Geek", "Pendu", "Shifoumi", "Fan_Site_Star_Wars", "PokéShifoumi"];
// let array = [] 
// for(let i = 0 ; i < projectsList.length; i++) {
//     let cardsContainer = document.getElementById("cardsContainer");
//     let newCard = array.push(`
//     <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//             <Card.Title>${projectsList[i]}</Card.Title>
//             <Card.Text>
//                 Projet n°x lorem ipsum bla bla bla bla bla bla bla bla
//             </Card.Text>
//             <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//     </Card>;`)
//     }


function Projects() {

    return(
    <article className="w-100 h-50 d-inline-block mx-auto text-center">
            <section className="d-flex flex-column">
              <h3>Mes Derniers projets :</h3>
              <div id="cardsContainer"></div>

        <div id="cards_landscape_wrap-2">
            <div className="container">
                <div className="row">

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <a href="#">
                            <div className="card-flyer">
                                <div className="text-box">
                                    <div className="image-box">
                                        <img src={StarWars} alt="" />
                                    </div>
                                    <div className="text-container">
                                        <h6>Fan Site Star Wars</h6>
                                        <p>Projet de création d'un site utilisant réact et une API.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <a href="#">
                            <div className="card-flyer">
                                <div className="text-box">
                                    <div className="image-box">
                                        <img src={PiggyBank} alt="" />
                                    </div>
                                    <div className="text-container">
                                        <h6>Piggy Bank</h6>
                                        <p>Projet de création d'un site de banque avec interface et base de données en api.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <a href="#">
                            <div className="card-flyer">
                                <div className="text-box">
                                    <div className="image-box">
                                        <img src={JeuDesPaires} alt="" />
                                    </div>
                                    <div className="text-container">                                    
                                        <h6>Jeu Des Paires</h6>
                                        <p>Création d'une page web sur le jeu des paires en javascript.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <a href="#">
                            <div className="card-flyer">
                                <div className="text-box">
                                    <div className="image-box">
                                        <img src={Norimmo} alt="" />
                                    </div>
                                    <div className="text-container">
                                        <h6>NorImmo</h6>
                                        <p>Projet en équipe de création d'un site dynamique pour une agence immobilière.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <a href="#">
                            <div className="card-flyer">
                                <div className="text-box">
                                    <div className="image-box">
                                        <img src={Terre2Geek} alt="" />
                                    </div>
                                    <div className="text-container">
                                        <h6>Terre De Geek</h6>
                                        <p>Création d'une page web sur le jeu des paires en javascript.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </article>
    )
}

export default Projects;
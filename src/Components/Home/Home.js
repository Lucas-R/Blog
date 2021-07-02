import "./Home.css";
import Photo from "./Image/photo.png";
export default function Home() {
    return (
        <div className="container-home">
            <div className="home-top">
                <div className="wrapper-photo">
                    <img className="photo" src={Photo} alt="author"/>
                </div>
                <div className="wrapper-title">
                    <h1 className="title-home"> Olá, </h1>
                    <h1 className="title-home"> Eu sou <span className="title-span">L</span>ucas, </h1>
                    <h1 className="title-home"> Web Developer </h1>
                    <p className="subtitle-home"> Front End Developer <span className="pointer-text">|</span> </p>
                </div>
            </div>
            <div className="home-bottom">
                <div className="wrapper-button">
                    <a href="#perfil"><button className="button-home"> Saber mais! </button></a>
                </div>
            </div>
        </div>
    );
}
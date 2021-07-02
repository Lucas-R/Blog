import React, { useEffect, useState } from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Perfil.css';
import { Link } from '@material-ui/icons';
export default function Perfil() {
    const data = new Date();
    const idade = data.getFullYear() - 1996 + "Anos";
    const [user, setUser] = useState([null]);
    useEffect(() => {
        fetch("https://api.github.com/users/Lucas-R")
        .then(response => {
            if(response.ok){
                return response.json();
            }else{
                return (response.status);
            }
        })
        .then(data => {
            setUser(data);
        })
    }, []);

    console.log(user)
    return (
        <>
        <div className="container-perfil" id="container-perfil">
            <div className="wrapper-desc">
                <h1 className="title-desc"> Quem eu sou <span className="title-span"> ? </span></h1>
                <p className="desc"> Eu me chamo Lucas Rodrigues, tenho {idade}, programador Front-End. A pouco mais de 5 anos cursei Informatica para internet na Etec de Itanháem e outros cursos online. Sou apaixonado pelo mundo da programação a muitos anos. Aberto sempre a novas oportunidades e desafios. </p>
            </div>

            <div className="wrapper-perfil">
                <div className="wrapper-perfil-photo">
                    <img className="photo-perfil" src={user.avatar_url} />
                </div>
                <div className="wrapper-infos">
                    <h1 className="name"> {user.name ? user.name : "fullname"} </h1>
                    <h2 className="login"> {user.login ? user.login : "Username"} </h2>
                    <ul className="contact-list">   
                        <a href="https://api.whatsapp.com/send?phone=5513996525901&text=%C3%93la%2C%20Tudo%20bem%20%3F" target="_blank" className="contact-link">
                            <li className="contact-item">
                                <WhatsAppIcon />
                                +55 (13) 99652-5901
                            </li>
                        </a>
                        <a href="#" className="contact-link">
                            <li className="contact-item">
                                <EmailIcon />
                                {user.email ? user.email : " lucasrodriguesbezerra@outlook.com"}
                            </li>
                        </a>
                        <a href="#" className="contact-link">
                            <li className="contact-item">
                                <LinkedInIcon />
                                {user.blog ? " Ir para o LinkedIn" : " "}
                            </li>
                        </a>
                        <a href="#" className="contact-link">
                            <li className="contact-item">
                                <TwitterIcon />
                                {user.twitter_username ? " "+user.twitter_username : " "}
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}
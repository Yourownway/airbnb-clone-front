/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { withRouter } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="Home">
        <div className="Home_offre">
          <h2>Inutile de s'éloigner loin pour trouver ce qui compte.</h2>
          <div className="Home_offre_container">
            <div className="Home_offre_card">
              <img
                src="https://a0.muscache.com/im/pictures/4127db13-fb7d-43e7-8dc2-619fa61524aa.jpg?im_w=720"
                alt="Les expériences airbnb"
              />
              <div className="Home_offre_card_text">
                <h3>Expériences en ligne</h3>
                <p>
                  Des activités uniques à faire ensemble, organisées par des hôtes du monde entier.
                </p>
              </div>
            </div>
            <div className="Home_offre_card">
              <img
                src="https://a0.muscache.com/im/pictures/ef0ee86b-feba-47f8-8882-014b2a7b6926.jpg?im_w=720"
                alt="Les expériences airbnb"
              />
              <div className="Home_offre_card_text">
                <h3>Escapades à proximité</h3>
                <p>Faites un break et ressourcez-vous à deux pas de chez vous.</p>
              </div>
            </div>
            <div className="Home_offre_card">
              <img
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                alt="Les expériences airbnb"
              />
              <div className="Home_offre_card_text">
                <h3>Logements entiers</h3>
                <p>
                  Des logements entiers confortables, avec de la place pour accueillir les amis ou
                  la famille.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Home_experiences">
          <h2>Des expériences en ligne avec des grands chefs</h2>
          <p>
            Cuisinez avec des légendes culinaires et découvrez l'histoire de leurs plats préférés.
            Participez à des activités interactives, exclusives et animées par des hôtes
            exceptionnels, sans sortir de chez vous.
          </p>

          <div className="Home_experiences_container">
            <div className="Home_experiences_card">
              <img
                src="https://a0.muscache.com/im/pictures/ff99d464-f0a4-4a0e-9571-c604c44bf2d8.jpg?im_w=720"
                alt="Les expériences airbnb"
              />
              <div className="Home_experiences_card_text">
                <h3>Apprenez des recettes estivales avec le célèbre chef Rōze Traore </h3>
              </div>
            </div>
            <div className="Home_experiences_card">
              <img
                src="https://a0.muscache.com/im/pictures/0b9f25e6-41e1-4544-8750-db5521e33196.jpg?im_w=720"
                alt="Les expériences airbnb"
              />
              <div className="Home_experiences_card_text">
                <h3>Fruits de mer avec le chef Michelin Marc Favier</h3>
              </div>
            </div>
            <div className="Home_experiences_card">
              <img
                src="https://a0.muscache.com/im/pictures/363ef4ee-0df3-457e-9686-b0e0c42f4949.jpg?im_w=720"
                alt="Les expériences airbnb"
              />
              <div className="Home_experiences_card_text">
                <h3>Association de saveurs et dressage avec le chef Michelin Soo Ahn</h3>
              </div>
            </div>
            <div className="Home_experiences_card">
              <img
                src="https://a0.muscache.com/im/pictures/b4ad6efb-4151-4f80-827c-2b97e49488a6.jpg?im_w=720"
                alt="Les expériences airbnb"
              />
              <div className="Home_experiences_card_text">
                <h3>Cuisinez de saison avec Anthea Stephenson, chef vedette à Londres</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Home);

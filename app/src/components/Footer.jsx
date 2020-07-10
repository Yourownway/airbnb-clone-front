import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_sections">
        <h5>À PROPOS</h5>
        <div className="footer_sections_links">
          <Link to="/maintenance">Fonctionnement d'Airbnb</Link>
          <Link to="/maintenance">Diversité et intégration</Link>
          <Link to="/maintenance">Accessibilité</Link>
          <Link to="/maintenance">Confiance et sécurité</Link>
          <Link to="/maintenance">Airbnb Citizen</Link>
          <Link to="/maintenance">Jeux olympiques</Link>
          <Link to="/maintenance">Newsroom</Link>
        </div>
      </div>
      <div className="footer_sections">
        <h5>COMMUNAUTÉ</h5>
        <div className="footer_sections_links">
          <Link to="/maintenance">Airbnb Magazine</Link>
          <Link to="/maintenance">Partenaires Airbnb</Link>
          <Link to="/maintenance">Airbnb for Work</Link>
          <Link to="/maintenance">Inviter des amis</Link>
          <Link to="/maintenance">Carrières</Link>
        </div>
      </div>
      <div className="footer_sections">
        <h5>HÔTE</h5>
        <div className="footer_sections_links">
          <Link to="/maintenance">Héberger des voyageurs</Link>
          <Link to="/maintenance">Organiser une expérience en ligne</Link>
          <Link to="/maintenance">Message de Brian Chesky, président d'Airbnb</Link>
          <Link to="/maintenance">Accueil responsable</Link>
          <Link to="/maintenance">Open Homes</Link>
          <Link to="/maintenance">Centre de ressources</Link>
          <Link to="/maintenance">Community Center</Link>
        </div>
      </div>
      <div className="footer_sections">
        <h5>ASSISTANCE</h5>
        <div className="footer_sections_links">
          <Link to="/maintenance">Dernières informations relatives au COVID-19</Link>
          <Link to="/maintenance">Centre d'aide</Link>
          <Link to="/maintenance">Options d'annulation</Link>
          <Link to="/maintenance">Accueil responsable</Link>
        </div>
      </div>
      <div className="footer_sections_bottom">
        <div className="footer_sections_langueDevise">
          <h5>Français(FR)</h5>
          <h5>$EUR</h5>
        </div>
        <div className="footer_sections_copyright">
          <h6>© 2020 Airbnb, Inc. All rights reserved</h6>
          <p>
            Confidentialité · Conditions · Plan du site · Fonctionnement du site · Informations sur
            l'entreprise
          </p>
        </div>
      </div>
    </footer>
  );
}

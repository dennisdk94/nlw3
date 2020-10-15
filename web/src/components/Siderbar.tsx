import React from 'react';
import { useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../images/mapmarker.svg';

import '../styles/components/siderbar.css'

export default function Sidebar() {
  const { goBack } = useHistory();
  return (
    <aside className="app-siderbar">
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
}
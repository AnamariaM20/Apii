import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TableComponent from '../Pages/UserPage/TableComponent';
import Geolocation from "../Components/Geolocation/Geolocation";
import "./Geolocation/geolocation.css"
import { useTranslation } from "react-i18next";

//https://www.youtube.com/watch?v=lf_uNOKVSnM

const Placeholder = ({ setReqType }) => {
  const { reqType } = useParams();
  const [items, setItems] = useState([]);
  const [showMap, setShowMap] = useState(true);
  const [myLocation, setMyLocation] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    setReqType(reqType);
    const fetchItems = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, [reqType, setReqType]);

  // Obține locația o singură dată
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMyLocation([latitude, longitude]);
        },
        (err) => console.error('Eroare la locație:', err)
      );
    }
  }, []);

  return (
    <div>
      {/* Trimite locația către tabel */}
      <TableComponent items={items} myLocation={myLocation} />

      <button style={{ color: "red" }} onClick={() => setShowMap(!showMap)}>
        {showMap ? t('button.hideMap') : t('button.showMap')}
      </button>

      <div className={showMap ? "showMap" : "noShowMap"}>
        {/* Trimite locația către hartă */}
        <Geolocation users={items} close={setShowMap} myLocation={myLocation} />
        </div>
    </div>
  );
};
export default Placeholder;



import { useState, useMemo } from 'react';
import Row from '../../Components/Row/Row';
import { useTranslation } from "react-i18next";


const haversineDistance = (coords1, coords2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const [lat1, lon1] = coords1;
    const [lat2, lon2] = coords2;

    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

const TableComponent = ({ items, myLocation }) => {
    const [sortByDistance, setSortByDistance] = useState(false);
    const [distanceAsc, setDistanceAsc] = useState(true);
    const [alphaAsc, setAlphaAsc] = useState(true);
    const { t } = useTranslation();

    const sortedItems = useMemo(() => {
        if (!items || items.length === 0) return [];
      
        if (sortByDistance && myLocation) {
          return [...items].sort((a, b) => {
            const aCoords = [parseFloat(a.address?.geo?.lat), parseFloat(a.address?.geo?.lng)];
            const bCoords = [parseFloat(b.address?.geo?.lat), parseFloat(b.address?.geo?.lng)];
      
            const distA = haversineDistance(myLocation, aCoords);
            const distB = haversineDistance(myLocation, bCoords);
      
            return distanceAsc ? distA - distB : distB - distA;
          });
        }
      
        // fallback: sortare alfabetică
        const sortKey = 'name' in items[0] ? 'name' : 'title' in items[0] ? 'title' : 'email';
        return [...items].sort((a, b) => {
          const valA = a[sortKey]?.toLowerCase() || '';
          const valB = b[sortKey]?.toLowerCase() || '';
          return alphaAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
        });
      }, [items, sortByDistance, distanceAsc, myLocation, alphaAsc]);

    return (
        <div className='table-container'>
            {/* {myLocation && pentru a verifica daca exista activa locatia  */}
            {myLocation && (
                <button style={{ color: "red" }}
                    onClick={() => {
                        setSortByDistance(true);
                        setDistanceAsc(prev => !prev);
                    }}>
                     {distanceAsc ? t('order.distanceNF') : t('order.distanceFN')}
                </button>
            )}
            <button style={{ color: "red" }}
                onClick={() => {
                    setSortByDistance(false);
                    setAlphaAsc(prev => !prev);
                }}>
                {alphaAsc ? t('order.alphaAZ') : t('order.alphaZA')}
            </button>

            <table>
                <tbody>
                    {sortedItems.map(item => (
                        <Row key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;

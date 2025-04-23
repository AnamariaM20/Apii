import React from 'react';
import Cell from '../Cell/Cell';
import "./index.css";

const Row = ({ item }) => {
  return (
    <tr className='form'>
      {Object.entries(item).map(([key, value]) => {
        // Când cheia este "address" sau "company"
        if ((key === "address" || key === "company") && typeof value === "object") {
          const cells = [];

          Object.values(value).forEach((val, index) => {
            if (typeof val === 'object') {
              // Dacă valoarea este un obiect (ex: geo), extragem și valorile din el
              Object.values(val).forEach((subVal, subIndex) => {
                cells.push(
                  <Cell key={`${key}-sub-${index}-${subIndex}`} cellData={subVal} />
                );
              });
            } else {
              cells.push(
                <Cell key={`${key}-${index}`} cellData={val} />
              );
            }
          });

          return cells;
        }

        // Pentru orice alt câmp normal
        return (
          <Cell key={key} cellData={typeof value === 'object' ? JSON.stringify(value) : value} />
        );
      })}
    </tr>
  );
};

export default Row;

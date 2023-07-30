import React, { useState, useEffect } from 'react';

function SliderRange({ data }) {
  const [minPh, setMinPh] = useState(0);
  const [maxPh, setMaxPh] = useState(14);

  useEffect(() => {
    if (data.length > 0) {
      const phValues = data.map(obj => obj.ph);
      setMinPh(Math.min(...phValues));
      setMaxPh(Math.max(...phValues));
    }
  }, [data]);

  return (
    <div>
      <input
        type="range"
        min={minPh}
        max={maxPh}
        step="0.1"
        defaultValue={minPh}
        onChange={event => {
          const selectedPh = parseFloat(event.target.value);
          // Aquí puedes hacer lo que necesites con el valor seleccionado
          console.log(`Selected pH: ${selectedPh}`);
        }}
      />
    </div>
  );
}

export default SliderRange;
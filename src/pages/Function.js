import { useState } from 'react';
import '../styles/Function.css';

const calculateWeightRange = (height) => {
  const heightInMeters = height / 100;
  const minWeight = (19.5 * heightInMeters * heightInMeters).toFixed(2); 
  const maxWeight = (23 * heightInMeters * heightInMeters).toFixed(2); 

  return { minWeight, maxWeight };
};

export default function Function() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [heightRange, setHeightRange] = useState('');
  const [weightRange, setWeightRange] = useState('');

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
    if (event.target.value) {
      const { minWeight, maxWeight } = calculateWeightRange(event.target.value);
      setWeightRange(`Peso saludable: ${minWeight} kg a ${maxWeight} kg`);
    } else {
      setWeightRange('');
    }
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
    if (event.target.value) {
      const validHeightMin = Math.sqrt(event.target.value / 23) * 100; 
      const validHeightMax = Math.sqrt(event.target.value / 19.5) * 100; 
      setHeightRange(`Estatura: ${validHeightMin.toFixed(2)} cm a ${validHeightMax.toFixed(2)} cm`);
    } else {
      setHeightRange('');
    }
  };

  return (
    <div className="function-wrapper">
      <h1>Cálculo de peso y estatura</h1>
      <div className="function-container">
        <div className="input-section">
          <label>
            Ingresa tu altura (cm):
            <input
              type="number"
              value={height}
              onChange={handleHeightChange}
              placeholder="Ej: 170"
            />
          </label>
          <p>{weightRange}</p>
        </div>

        <div className="input-section">
          <label>
            Ingresa tu peso (kg):
            <input
              type="number"
              value={weight}
              onChange={handleWeightChange}
              placeholder="Ej: 70"
            />
          </label>
          <p>{heightRange}</p>
        </div>
      </div>
    </div>
  );
}

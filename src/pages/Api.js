import { useState } from 'react';
import '../styles/Api.css'

const Api = () => {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchDogImage = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='dog-gallery'>
      <h2> Imágenes de perros aleatorias</h2>
      <button onClick={fetchDogImage} disabled={loading}>
        {loading ? 'Cargando...' : 'Obtener nueva imagen'}
      </button>
      {dogImage && (
        <div className='gallery'>
          <div className='gallery-item'>
            <img src={dogImage} alt='Dog' />
          </div>
        </div>
      )}
    </div>
  );
}

export default Api;

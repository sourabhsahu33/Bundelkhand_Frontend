import React from 'react';
import './learn.css';

const Learn = () => {
  const citiesData = [
    {
      city: 'Jhansi',
      temples: ['Jhansi Fort', 'Jhansi Rani Mahal', 'St. Judes Shrine']
    },
    {
      city: 'Chitrakoot',
      temples: ['Kamadgiri Temple', 'Hanuman Dhara Temple', 'Bharat Milap Temple']
    },
    {
      city: 'Datia',
      temples: ['Datia Palace', 'Peetambara Peeth', 'Sonagiri Jain Temple']
    },
    {
      city: 'Orchha',
      temples: ['Orchha Fort', 'Chaturbhuj Temple', 'Ram Raja Temple']
    },
    {
      city: 'Panna',
      temples: ['Panna National Park', 'Diamond Mines', 'Padmavati Devi Temple']
    },
    {
      city: 'Tikamgarh',
      temples: ['Lakshmi Narayan Temple', 'Rani Mahal', 'Shri Bhagwat Vilas Mandir']
    },
    {
      city: 'Sagar',
      temples: ['Garhphra Temple', 'Sagar Lake', 'Dharmrajeshwar Temple']
    },
    {
      city: 'Rewa',
      temples: ['Govindgarh Fort', 'Rewa Fort', 'Bhairon Baba Temple']
    },
    {
      city: 'Satna',
      temples: ['Chitrakoot Dham', 'Bharat Koop', 'Venkatesh Temple']
    },
    {
      city: 'Chhatarpur',
      temples: ['Khajuraho Temples', 'Chaturbhuj Temple', 'Matangeshwar Temple']
    },
    {
      city: 'Damoh',
      temples: ['Jageshswar Dham Temple', 'Nohleshwar Temple', 'Radha Krishna Temple']
    },
    {
      city: 'Katni',
      temples: ['Durgavati Museum', 'Vireshwar Temple', 'Sharda Devi Temple']
    },
    {
      city: 'Shivpuri',
      temples: ['Madhav National Park', 'Chhatris of Scindia Dynasty', 'Bhadaiya Kund']
    },
    {
      city: 'Chhindwara',
      temples: ['Pench National Park', 'Ganesh Mandir', 'Ram Mandir']
    },
    {
      city: 'Seoni',
      temples: ['Kanha Tiger Reserve', 'Ganesh Mandir', 'Shri Swami Narayan Temple']
    }
    
  ];

  return (
    <div id="learn" className='learn-container'>
      <h2 className='learn-heading'>Madhya Pradesh's Bundelkhand Region</h2>
      <p className='region-info'>Let's Explore</p>
      <div className='cities-grid'>
        {citiesData.map((city, index) => (
          <div key={index} className='city-card'>
            <h3 className='city-name'>{city.city}</h3>
            <ul className='temple-list'>
              {city.temples.map((temple, index) => (
                <li key={index}>{temple}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learn;

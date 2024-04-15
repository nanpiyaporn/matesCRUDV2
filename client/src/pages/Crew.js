import React, { useState, useEffect } from 'react';
import supabase from '../client';

const Crew = () => {
  const [crew, setCrew] = useState([]);
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const fetchCrew = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*');

      if (error) {
        console.error(error);
        return;
      }

      setCrew(data);
    };

    fetchCrew();
  }, []);

  useEffect(() => {
    if (crew.length > 0) {
      const totalRating = crew.reduce((total, mate) => total + mate.rating, 0);
      const averageRating = totalRating / crew.length;

      setStatistics({
        totalCrewmates: crew.length,
        totalRating,
        averageRating,
      });
    }
  }, [crew]);

  return (
    <div>
      <h1>Crew Statistics</h1>
      <p>Total Crewmates: {statistics.totalCrewmates}</p>
      <p>Total Rating: {statistics.totalRating}</p>
      <p>Average Rating: {statistics.averageRating}</p>
    </div>
  );
};

export default Crew;
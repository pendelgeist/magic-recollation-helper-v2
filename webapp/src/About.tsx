import * as React from 'react';
import { useEffect, useState } from 'react';
import api from './api';

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get(`/test`)
      .then((response: any) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>About</div>
      <div>
        <ul>
          {data.map(x => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;

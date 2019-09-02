import api from './api';
  import { useEffect, useState } from 'react';
  import * as React from 'react';
 
  interface Props {
    name: string;
  }
 
  const TestFile = (props: Props) => {
    const [data, setData] = useState([]);
 
    useEffect(() => {
      api
        .get(`/test`)
        .then(response => {
          console.log(response.data);
          setData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
 
    return (
      <div>
        <div>Hello {props.name}</div>
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
 
  export default TestFile;

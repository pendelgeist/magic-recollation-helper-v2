import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import api from './api';

export interface SimplePageProps {
  name: string;
}

const SimplePage = (props: SimplePageProps) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get(`/magic-set`)
      .then((response: any) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return <div>Simple Page - {props.name}</div>;
};

export default SimplePage;

import * as React from 'react';

export interface SimplePageProps {
  name: string
}

const SimplePage = (props: SimplePageProps) => <div>Simple Page - {props.name}</div>;

export default SimplePage;

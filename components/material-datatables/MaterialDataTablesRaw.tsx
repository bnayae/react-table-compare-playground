import React from 'react';
import { IWithClassName } from '../../interfaces';
import { SampleA } from './SampleA';

interface IProps extends IWithClassName {
  // id: number;
}

export const MaterialDataTablesRaw = ({ className }: IProps) => {
  return (
    <div className={className}>
      <h1>Material-UI-datatables</h1>
      <h2>Sample A</h2>
      <SampleA />
    </div>
  );
};

import React from 'react';
import { IWithClassName } from '../../interfaces';
import { SampleA } from '../rc-table/SampleA';

interface IProps extends IWithClassName {
  // id: number;
}

export const RsuitTableRaw = ({ className }: IProps) => {
  return (
    <div className={className}>
      <h1>Rsuit Table</h1>
      <h2>Sample A</h2>
      <SampleA />
    </div>
  );
};

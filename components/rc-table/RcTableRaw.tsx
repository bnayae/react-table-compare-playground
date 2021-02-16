import React from 'react';
import { IWithClassName } from '../../interfaces';
import { SampleA } from './SampleA';

interface IProps extends IWithClassName {
  // id: number;
}

export const RcTableRaw = ({ className }: IProps) => {
  return (
    <div className={className}>
      <h1>RC Table</h1>
      <h2>Sample A</h2>
      <SampleA />
    </div>
  );
};

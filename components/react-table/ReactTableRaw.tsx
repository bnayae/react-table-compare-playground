import React from 'react';
import { IWithClassName } from '../../interfaces';

interface IProps extends IWithClassName {
  // id: number;
}

export const ReactTableRaw = ({ className }: IProps) => {
  return (
    <div className={className}>
      <h1>React Table</h1>
    </div>
  );
  ``;
};

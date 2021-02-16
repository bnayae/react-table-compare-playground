import React from 'react';
import { IWithClassName } from '../../interfaces';

interface IProps extends IWithClassName {
  // id: number;
}

export const MaterialTableRaw = ({ className }: IProps) => {
  return (
    <div className={className}>
      <h1>Material-UI-datatables</h1>
    </div>
  );
};

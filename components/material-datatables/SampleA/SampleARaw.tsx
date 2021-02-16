import { FormControlLabel, TextField } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import React from 'react';
import { IWithClassName } from '../../../interfaces';

interface IData extends Record<string, unknown> {
  name: string;
  company: string;
  city: string;
  state: string;
}

const data: IData[] = [
  {
    name: 'Joe James',
    company: 'Test Corp',
    city: 'Yonkers',
    state: 'NY',
  },
  {
    name: 'John Walsh',
    company: 'Test Corp',
    city: 'Hartford',
    state: 'CT',
  },
  {
    name: 'Bob Herm',
    company: 'Test Corp',
    city: 'Tampa',
    state: 'FL',
  },
  {
    name: 'James Houston',
    company: 'Test Corp',
    city: 'Dallas',
    state: 'TX',
  },
  {
    name: 'Xaa',
    company: 'Test Corp',
    city: 'Dallas',
    state: 'TX',
  },
  {
    name: 'W',
    company: 'Test Corp',
    city: 'Dallas',
    state: 'TX',
  },
  {
    name: 'O',
    company: 'Test Corp',
    city: 'Dallas',
    state: 'TX',
  },
  {
    name: 'P',
    company: 'Test Corp',
    city: 'Dallas',
    state: 'TX',
  },
  {
    name: 'R',
    company: 'Test Corp',
    city: 'Dallas',
    state: 'TX',
  },
  {
    name: 'C',
    company: 'Test Corp',
    city: 'TEL-AVIV',
    state: 'TA',
  },
  {
    name: 'E',
    company: 'Test Corp',
    city: 'TEL-AVIV',
    state: 'TA',
  },
  {
    name: 'X',
    company: 'Test Corp',
    city: 'Dallas',
    state: 'TX',
  },
];

const columns = [
  {
    name: 'name',
    label: 'Name',
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta, updateValue) => (
        <FormControlLabel
          value={value}
          control={<TextField value={value} />}
          // onChange={(event) =>
          //   console.log('## Update', { value, updateValue, tableMeta })
          //   tableMeta.rowData[tableMeta.rowIndex][tableMeta.columnIndex] = {...(tableMeta.rowData)}
          // }
        />
      ),
    },
  },
  {
    name: 'company',
    label: 'Company',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'city',
    label: 'City',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'state',
    label: 'State',
    options: {
      filter: true,
      sort: false,
    },
  },
];

const options = {
  filterType: 'checkbox',
};

export const SampleARaw = ({ className }: IWithClassName) => (
  <MUIDataTable
    className={className}
    title={'Employee List'}
    data={data}
    columns={columns}
    options={options}
  />
);

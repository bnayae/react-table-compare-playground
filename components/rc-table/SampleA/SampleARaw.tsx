import Table from 'rc-table';
import { ColumnGroupType, ColumnType } from 'rc-table/lib/interface';
import { useState } from 'react';
import { IWithClassName } from '../../../interfaces';

interface IData extends Record<string, unknown> {
  id: number;
  name: string;
  email: string;
  avartar: string;
}

const dataSource: IData[] = [
  {
    id: 1,
    name: 'a',
    email: 'a@email.com',
    avartar:
      'https://gravatar.com/avatar/fa09a22bd1826d6875fb0434de53f2d3?s=400&d=robohash&r=x',
  },
  {
    id: 2,
    name: 'b',
    email: 'b@email.com',
    avartar:
      'https://gravatar.com/avatar/eb48e44319df830c7873083f18f07a24?s=400&d=robohash&r=x',
  },
  {
    id: 3,
    name: 'c',
    email: 'c@email.com',
    avartar:
      'https://gravatar.com/avatar/e55ebe5574ffc4fdefddf3f269c7736e?s=400&d=robohash&r=x',
  },
];

export const SampleARaw = ({ className }: IWithClassName) => {
  const [data, setData] = useState(dataSource);

  const avatarColumn: ColumnType<IData> = {
    title: 'Avartar',
    dataIndex: 'avartar',
    key: 'avartar',
    width: 200,
    render: (value: string, record: IData, index: number) => (
      <img width={50} height={50} src={value} />
    ),
  };

  const columns: (ColumnGroupType<IData> | ColumnType<IData>)[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // width: 100,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      // width: 100,
      render: (value: string, record: IData, index: number) => (
        <input
          type="text"
          onChange={(e) =>
            setData((prv) =>
              prv.map((r, i) =>
                i !== index ? r : { ...r, email: e.target.value }
              )
            )
          }
          value={value}
        />
      ),
    },
    avatarColumn,
    {
      title: 'Operations',
      dataIndex: '',
      key: 'operations',
      render: () => <a href="#">Delete</a>,
    },
  ];

  return (
    <Table
      className={className}
      columns={columns}
      data={data}
      // tableLayout="auto"
    />
  );
};

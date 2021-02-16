import { Cell, Column, HeaderCell, Table } from 'rsuite-table';
import { CellProps } from 'rsuite-table/lib/Cell';
import { IWithClassName } from '../../../interfaces';
import '../../rc-table/SampleA/node_modules/rsuite-table/dist/css/rsuite-table.css';
interface IData extends Record<string, unknown> {
  id: number;
  name: string;
  email: string;
  avartar: string;
}

const dataList: IData[] = [
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

const ImageCell = ({ rowData, dataKey, ...rest }: CellProps) => (
  <Cell {...rest}>
    <img src={(rowData && rowData[dataKey ?? '']) ?? ''} width="50" />
  </Cell>
);

export const SampleARaw = ({ className }: IWithClassName) => (
  <Table
    className={className}
    data={dataList}
    height={800}
    headerHeight={30}
    hover
    locale={{ emptyMessage: 'empty', loading: 'loading..' }}
    minHeight={200}
    rowHeight={46}
    rowKey="key"
    autoHeight
  >
    <Column width={100} sortable fixed resizable>
      <HeaderCell width={100} depth={1}>
        ID
      </HeaderCell>
      <Cell width={100} depth={2} dataKey="id" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell width={100} depth={3}>
        Name
      </HeaderCell>
      <Cell width={100} depth={0} dataKey="name" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell width={100} depth={0}>
        Email
      </HeaderCell>
      <Cell width={100} depth={0}>
        {(rowData, rowIndex) => {
          return <a href={`mailto:${rowData.email}`}>{rowData.email}</a>;
        }}
      </Cell>
    </Column>

    <Column width={100} resizable>
      <HeaderCell width={100} depth={0}>
        Avartar
      </HeaderCell>
      <ImageCell width={100} depth={0} dataKey="avartar" />
    </Column>
  </Table>
);

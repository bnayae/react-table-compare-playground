import styled from 'styled-components';
import { SampleARaw } from './SampleARaw';

export const SampleA = styled(SampleARaw)`
  display: grid;
  justify-items: left;
  padding: 5rem;

  .rc-table-thead {
    background: darkcyan;
    color: whitesmoke;

    .rc-table-cell {
      padding: 1rem;
    }
  }

  .even-row {
    background: lightpink;
  }

  .odd-row {
    background: lightblue;
  }
`;

import Link from 'next/link';
import React from 'react';

const IndexPage = () => (
  <ul>
    <li>
      <Link href="/material-datatables">
        <a>Material-UI-datatables</a>
      </Link>
    </li>
    <li>
      <Link href="/material-table">
        <a>Material-table</a>
      </Link>
    </li>
    <li>
      <Link href="/react-table">
        <a>React-Table</a>
      </Link>
    </li>
    <li>
      <Link href="/rsuite-table">
        <a>Rsuite-Table</a>
      </Link>
    </li>
    <li>
      <Link href="/rc-table">
        <a>RC-TABLE</a>
      </Link>
    </li>
  </ul>
);

export default IndexPage;

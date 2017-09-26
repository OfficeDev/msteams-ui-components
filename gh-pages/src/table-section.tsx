import { Table, TBody, Td, Tr } from 'msteams-ui-components-react';
import * as React from 'react';

export class TableSection extends React.Component {
  render() {
    return (
      <div>
        <h1>Table</h1>
        <Table>
          <TBody>
            <Tr><Td>a</Td><Td>b</Td></Tr>
            <Tr><Td>1</Td><Td>2</Td></Tr>
          </TBody>
        </Table>
      </div>
    );
  }
}

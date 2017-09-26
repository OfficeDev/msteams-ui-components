import { Table, TBody, Td, Th, THead, Tr } from 'msteams-ui-components-react';
import * as React from 'react';

export class TableSection extends React.Component {
  render() {
    return (
      <div>
        <h1>Table</h1>
        <Table>
          <THead>
            <Tr>
              <Th>col1</Th><Th>col2</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr><Td>a</Td><Td>b</Td></Tr>
            <Tr><Td>1</Td><Td>2</Td></Tr>
          </TBody>
        </Table>
      </div>
    );
  }
}

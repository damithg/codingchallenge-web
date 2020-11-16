import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Page } from '../Page';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export const ViewProducts: FC<RouteComponentProps> = ({ history }) => {
  const [data, setItems] = useState([]);

  useEffect(() => {
    fetchedData();
  }, []);

  const fetchedData = async () => {
    const values = await fetch('http://localhost:19802/api/Product/Get');
    const items = await values.json();
    console.log('values ' + values);
    console.log('data ' + items);
    setItems(items);
  };
  console.log('fetched data ' + fetchedData);

  const handleClickBack = (event: any) => {
    history.push('/');
  };
  return (
    <Page title="View All Products">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Code</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => {
            return (
              <tr>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td>{item.productDescription}</td>
                <td>{item.productCode}</td>
                <td>{item.costPrice}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Button variant="outline-secondary" onClick={handleClickBack}>
        Back to Main Page
      </Button>
    </Page>
  );
};

import { useEffect, useState, FC } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Page } from '../Page';
import { PageTitle } from '../PageTitle';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const HomePage: FC<RouteComponentProps> = ({ history }) => {
  const [details, setDetails] = useState({
    ProductName: '',
    productDescription: '',
    productCode: '',
    costPrice: '',
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios
      .post('http://localhost:19802/api/Product/Add', details)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleClickProducts = (event: any) => {
    history.push('/view');
  };
  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Create New Product</PageTitle>
      </div>
      <Form onSubmit={handleSubmit} className="addProduct">
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              required
              onChange={e =>
                setDetails({ ...details, ProductName: e.target.value })
              }
              value={details.ProductName}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Description"
              required
              onChange={e =>
                setDetails({ ...details, productDescription: e.target.value })
              }
              value={details.productDescription}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Product Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="P012331"
              required
              onChange={e =>
                setDetails({ ...details, productCode: e.target.value })
              }
              value={details.productCode}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Cost Price</Form.Label>
            <input
              type="number"
              className="form-control"
              name="costPrice"
              placeholder="Cost Price"
              required
              onChange={e =>
                setDetails({ ...details, costPrice: e.target.value })
              }
              value={details.costPrice}
              min="1"
              max="25000"
            />
          </Form.Group>
        </Form.Row>

        <ButtonGroup toggle className="mb-2">
          <Button variant="outline-primary" type="submit">
            Add Product
          </Button>
          <Button variant="outline-secondary" onClick={handleClickProducts}>
            View All Products
          </Button>
        </ButtonGroup>
      </Form>
    </Page>
  );
};

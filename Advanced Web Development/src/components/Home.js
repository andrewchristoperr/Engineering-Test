import React, { Component } from "react";
import { ProductConsumer } from "./Dashboard/Dashboard";
import { Table, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center mt-3 mb-3">CRUD Operations</h2>
        <ProductConsumer>
          {(value) => {
            return (
              <Table size="sm" variant="dark" striped bordered hover>
                <tbody>
                  <tr className="text-center">
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                  </tr>
                  <tr className="text-center">
                    <td>
                      <input
                        type="text"
                        value={value.name}
                        onChange={(e) => {
                          value.updateValue(e, "name");
                        }}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="text"
                        value={value.desc}
                        onChange={(e) => {
                          value.updateValue(e, "desc");
                        }}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="number"
                        value={value.price}
                        onChange={(e) => {
                          value.updateValue(e, "price");
                        }}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="number"
                        value={value.quantity}
                        onChange={(e) => {
                          value.updateValue(e, "quantity");
                        }}
                      ></input>
                    </td>
                    <td>
                      <Button
                        size="sm"
                        onClick={() => {
                          value.onSave(value.id);
                        }}
                      >
                        {value.id ? "Save" : "Add new Row"}
                      </Button>
                    </td>
                  </tr>

                  {value.Alldata.map((product) => {
                    return (
                      <tr className="text-center">
                        <td>{product.name}</td>
                        <td>{product.desc}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>
                          <Button
                            size="sm"
                            variant="primary"
                            onClick={() => {
                              value.onEdit(product.id);
                            }}
                          >
                            Edit
                          </Button>{" "}
                          |{" "}
                          <Button
                            size="sm"
                            variant="danger"
                            onClick={() => {
                              value.onDelete(product.id);
                            }}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export { Home };

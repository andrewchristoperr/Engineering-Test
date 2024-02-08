import React, { Component } from "react";
import { rowData } from "./appData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    Alldata: rowData,
    id: "",
    name: "",
    desc: "",
    quantity: "",
    price: "",
    updateEdit: [],
  };

  getRecord = (id) => {
    const product = this.state.Alldata.find((item) => item.id === id);
    return product;
  };

  onEdit = (id) => {
    const tempProduct = this.state.Alldata;
    const index = tempProduct.indexOf(this.getRecord(id));
    const selectedRecord = tempProduct[index];
    this.setState({
      id: selectedRecord["id"],
      name: selectedRecord["name"],
      desc: selectedRecord["desc"],
      price: selectedRecord["price"],
      quantity: selectedRecord["quantity"],
    });
  };

  onSave = (id) => {
    if (id !== "") {
      const SavedRecord = this.state.Alldata;
      const index = SavedRecord.indexOf(this.getRecord(id));
      const Record = SavedRecord[index];
      Record["name"] = this.state.updateEdit[1];
      Record["desc"] = this.state.updateEdit[2];
      Record["price"] = this.state.updateEdit[3];
      Record["quantity"] = this.state.updateEdit[4];
      this.setState({
        Alldata: [...this.state.Alldata],
        id: "",
        name: "",
        desc: "",
        price: "",
        quantity: "",
      });
    } else {
      const MaxId = Math.max(...this.state.Alldata.map((item) => item.id));
      const id = MaxId + 1;
      const newArr = [];
      newArr["name"] = this.state.updateEdit[1];
      newArr["desc"] = this.state.updateEdit[2];
      newArr["price"] = this.state.updateEdit[3];
      newArr["quantity"] = this.state.updateEdit[4];
      this.setState({
        Alldata: [...this.state.Alldata, newArr],
        id: "",
        name: "",
        desc: "",
        price: "",
        quantity: "",
      });
    }
  };

  onDelete = (id) => {
    const tempProduct = this.state.Alldata.filter((item) => item.id !== id);
    this.setState({
      Alldata: tempProduct,
    });
  };

  updateValue = (e, test) => {
    if (test === "name") {
      this.state.name = e.target.value;
    }

    if (test === "desc") {
      this.state.desc = e.target.value;
    }

    if (test === "price") {
      this.state.price = e.target.value;
    }

    if (test === "quantity") {
      this.state.quantity = e.target.value;
    }

    const tempArr = [
      this.state.id,
      this.state.name,
      this.state.desc,
      this.state.price,
      this.state.quantity,
    ];
    this.setState({
      updateEdit: tempArr,
    });
  };

  render() {
    // console.log(this.state.Alldata);
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            onEdit: this.onEdit,
            updateValue: this.updateValue,
            onSave: this.onSave,
            onDelete: this.onDelete,
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };

export default ProductProvider;

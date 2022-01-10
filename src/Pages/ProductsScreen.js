import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../components/ui/Navbar";
import { productStartAddNew, productStartLoading } from "../actions/product";

const ProductsScreen = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  const initProduct = {
    name: "",
    description: "",
    price: "",
  };

  const [formValues, setFormValues] = useState(initProduct);

  const { name, description, price } = formValues;

  useEffect(() => {
    dispatch(productStartLoading());
  }, [dispatch]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitFor = (e) => {
    e.preventDefault();
    dispatch(productStartAddNew(formValues));
  };

  return (
    <>
      <Navbar />

      <section className="section__products">
        <h2>
          <strong>Productos:</strong>
        </h2>
        {products.map((product) => {
          return (
            <div className="section__products--container" key={product.id}>
              <p>
                <strong>Producto: {product.name}</strong>
              </p>
              <p>
                <strong>Descripción:</strong> {product.description}
              </p>
              <p>
                <strong>Precio:</strong> {product.price}
              </p>
              <p>
                <strong>Id de producto:</strong> {product.id}
              </p>
              <p>
                <strong>Creado por: </strong>
                {product.user.name}
              </p>
              <p>
                <strong>Id de creador: </strong>
                {product.user._id}
              </p>
            </div>
          );
        })}
        <button>
          <Link to="/products"> Refrescar </Link>
        </button>
      </section>

      <h2>Agregar nuevo producto.</h2>

      <form className="container" onSubmit={handleSubmitFor}>
        <input
          type="text"
          placeholder="Nombre del producto"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Descripción"
          name="description"
          value={description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Precio"
          name="price"
          value={price}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={description.length < 10}>
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </>
  );
};

export default ProductsScreen;

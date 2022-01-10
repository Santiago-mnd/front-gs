import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";
import { prepareProducts } from "../helpers/prepareProducts";

export const productStartAddNew = (product) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;

    try {
      const resp = await fetchConToken("products/new-product", product, "POST");
      const body = await resp.json();

      if (body.ok) {
        product.id = body.product.id;
        product.user = {
          _id: uid,
          name,
        };
        dispatch(addNewProduct(product));
      }
    } catch (error) {}
  };
};

const addNewProduct = (product) => ({
  type: types.producAddNew,
  payload: product,
});

export const productStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("products");
      const body = await resp.json();
      const products = prepareProducts(body.products);
      dispatch(productsLoaded(products));
    } catch (error) {}
  };
};

const productsLoaded = (products) => ({
  type: types.productLoaded,
  payload: products,
});

export const productSetActive = (product) => ({
  type: types.productSetActive,
  payload: product,
});

export const productStartUpadte = (product) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`products/${product.id}`);
    } catch (error) {}
  };
};

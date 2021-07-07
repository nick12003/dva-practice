import request from '../../utils/request';

export async function getProduct(id) {
  return request(`product/${id}`);
}

export async function getProductByFilter(filter) {
  return request(`product?${filter}`);
}

export async function getProducts() {
  return request(`product`);
}

export async function createProduct(data) {
  return request(`product`, { method: 'POST', data: data });
}

export async function updateProduct(data) {
  return request(`product/${data.id}`, { method: 'PUT', data: data });
}

export async function deleteProduct(id) {
  return request(`product/${id}`, { method: 'DELETE' });
}

import baseAxiosInstance from 'utils/BaseAPI';

export async function getProducts() {
  try {
    const response = await baseAxiosInstance.get(`/products`);
    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
    return error;
  }
}

export async function getProductById(id: number) {
  try {
    const response = await baseAxiosInstance.get(`/products/${id}`);
    return response;
  } catch (error) {
    console.error('Error fetching product:', error);
    return error;
  }
}

export async function getReviewsByProductId(id: number) {
  try {
    const response = await baseAxiosInstance.get(`/reviews/product/${id}`);
    return response;
  } catch (error) {
    console.error('Error fetching product:', error);
    return error;
  }
}

export async function getProductsByDepartmentId(departmentId: number) {
  try {
    const response = await baseAxiosInstance.get(
      `/products/department/${departmentId}`
    );
    return response;
  } catch (error) {
    console.error('Error fetching products by department:', error);
    return error;
  }
}

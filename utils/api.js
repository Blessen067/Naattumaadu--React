import axios from "axios";

const api = axios.create({
  baseURL: "http://naatumaadu.test/api",
});

export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    const token = response.data.token;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(response.data.user_details));

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchProductData = async () => {
  try {
    const response = await api.get('/products');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // You can handle errors as needed
  }
};

export const productByID = async (id) => {
  try {

    console.log("io", id)
    const { data } = await api.get(`/products/${id}`)

    return data
  } catch (e) {
    throw e;
  }
}

export const myOrder = async (user_id, session_id) => {
  try {

    console.log("dadadadadadadaad", user_id);
    const { data } = await api.post("/orders", {
      user_id,
      session_id,
    });


    return data.myorder;
  } catch (error) {
    throw error.response;
  }
};

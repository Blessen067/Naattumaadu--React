import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
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
    const response = await api.get("/products");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // You can handle errors as needed
  }
};

export const productByID = async (id) => {
  try {
    console.log("io", id);
    const { data } = await api.get(`/products/${id}`);

    return data;
  } catch (e) {
    throw e;
  }
};

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

export const breadCrumbs = async () => {
  try {
    const { data } = await api.get("/image");

    return data.image;
  } catch (e) {
    throw e;
  }
};

export const gallery = async () => {
  try {
    const { data } = await api.get("/gallery");

    return data.image;
  } catch (e) {
    throw e;
  }
};

export const heroImageAPI = async () => {
  try {
    const { data } = await api.get("/herogallery");

    return data.image;
  } catch (e) {
    throw e;
  }
};

export const socialLinks = async () => {
  try {
    const { data } = await api.get("/socialmedia");

    return data.socialmedia;
  } catch (e) {
    throw e;
  }
};

export const messageUS = async (name, lastname, email, subject, notes) => {
  try {
    const { data } = await api.post("/message", {
      name,
      lastname,
      email,
      subject,
      message: notes,
    });

    return data.message;
  } catch (error) {
    throw error;
  }
};

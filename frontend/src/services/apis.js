import axios from "axios";
import config from "../config/config";
import { ROUTES } from "../config/dev.config";

function getHeaders() {
  return {
    headers: { Authorization: localStorage.getItem("token") },
  };
}

export async function signUp(payload) {
  const url = config() + ROUTES.routes.user + ROUTES.userRoutes.signup;
  const response = await axios.post(url, payload);
  return response;
}

export async function signIn(payload) {
  const url = config() + ROUTES.routes.user + ROUTES.userRoutes.signin;
  const response = await axios.post(url, payload);
  return response;
}

export async function getUsers(filters) {
  const url = config() + ROUTES.routes.user + ROUTES.userRoutes.bulk + filters;
  const response = await axios.get(url, getHeaders());
  return response;
}

export async function getBalance() {
  const url = config() + ROUTES.routes.account + ROUTES.accountRoutes.balance;
  const response = await axios.get(url, getHeaders());
  return response;
}

export async function transferMoney(payload) {
  const url = config() + ROUTES.routes.account + ROUTES.accountRoutes.transfer;
  const response = await axios.post(url, payload, getHeaders());
  return response;
}

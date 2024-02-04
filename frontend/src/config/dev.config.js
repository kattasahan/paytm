export const ROUTES = {
  host: "http://localhost:3000",
  version: {
    v1: "/api/v1",
    v2: "/api/v2",
  },
  routes: { user: "/user", account: "/account" },
  userRoutes: {
    signup: "/signup", // post
    signin: "/signin", // post
    update: "/update", // put
    bulk: "/bulk?filter=", // get
  },
  accountRoutes: {
    balance: "/balance", // get
    transfer: "/transfer", // post
  },
};

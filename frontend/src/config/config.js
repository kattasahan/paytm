import { ROUTES } from "./dev.config";

const config = () => {
  return ROUTES.host + ROUTES.version["v1"];
};

export default config;

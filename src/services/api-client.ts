import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "124785adc97444e394b494d35deb9151",
  },
});

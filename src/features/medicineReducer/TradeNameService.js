import axios from "axios";

const API_URL = "https://sore-lime-goat-tam.cyclic.app/api/drugs";

// get all companies
const getDrugs = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const drugService = {
  getDrugs
};

export default drugService;

/* eslint-disable react-hooks/rules-of-hooks */

import axios, { AxiosError } from "axios";

const countryUrl = "https://restcountries.com/v3.1/all";

export const getAllCountries = async () => {
  try {
    const response = await axios.get(`${countryUrl}`);

    if (response?.status === 200) {
      return response?.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data?.error?.message);
    } else if (error instanceof Error) {
      throw error;
    } else throw new Error("Error occurred while logging in");
  }
};

import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://178.18.207.155:1881";

// we will use this amazing free dog api and declare our client
const client = (() => {
  return axios.create({
    baseURL: API_URL,
  });
})();

// the request function which will destructure the response
// as it's shown in the Dog CEO API
const request = async function (options, store) {
  // success handler
  const onSuccess = function (response) {
    return response.data;
  };

  // error handler
  const onError = function (error) {
    const errorData = error?.response?.data;
    if (errorData.length > 1 || errorData?.errors?.length > 0) {
      errorData?.errors.forEach(function (error) {
        return toast.error(error.msg);
      });
    } else {
      return toast.error(errorData);
    }
  };

  // adding success and error handlers to client
  return client(options).then(onSuccess).catch(onError);
};

export default request;

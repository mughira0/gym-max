import axios from "axios";
import { toast } from "react-toastify";

let Get = async (url, accessToken) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  };
  try {
    const res = await axios.get(url, options);
    return res;
  } catch (error) {
    toast.error(error?.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};
export { Get };

let Post = async (url, body, accessToken) => {
  // Remove 'Content-Type' if the body is FormData
  const isFormData = body instanceof FormData;
  const headers = {
    Accept: "application/json",
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
  };

  const options = { headers };

  try {
    const res = await axios.post(url, body, options);
    return res;
  } catch (error) {
    toast.error(error?.response?.data?.message, {
      position: toast.POSITION.TOP_CENTER,
    });
    throw error; // Throw error to handle it later if needed
  }
};

export { Post };

let Patch = async (url, body, accessToken) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  };
  try {
    const res = await axios.patch(url, body, options);
    return res;
  } catch (error) {
    toast.error(error?.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};
export { Patch };

let Delete = async (url, accessToken) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  };
  try {
    const res = await axios.delete(url, options);
    return res;
  } catch (error) {
    toast.error(error?.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

let Put = async (url, body, accessToken) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  };
  try {
    const res = await axios.put(url, body, options);
    return res;
  } catch (error) {
    toast.error(error?.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};
export { Put };

export { Delete };

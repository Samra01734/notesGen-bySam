import axios from "axios";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";

export const getCurrentUser = async (dispatch) => {
  try {
    const result = await axios.get(
      `${serverUrl}/api/user/currentuser`,
      {
        withCredentials: true,
      }
    );

    console.log("Current User:", result.data);

    if (result.data.success) {
      dispatch(setUserData(result.data.user));
    }
  } catch (error) {
    console.log("Current User Error:", error);
  }
};

export default getCurrentUser;
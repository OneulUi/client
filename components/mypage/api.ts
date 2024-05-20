import axios from "axios";

const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export async function getLikedOotd() {
  const response = await axios.get("https://www.one-ul.com:8080/ootds/likes", {
    headers: {
      Authorization: getAccessToken(),
    },
  });
  return response.data;
}

export async function getSavedOotd() {
  const response = await axios.get(
    "https://www.one-ul.com:8080/ootds/bookmarks",
    {
      headers: {
        Authorization: getAccessToken(),
      },
    }
  );
  return response.data;
}

export async function getMyOotd() {
  const response = await axios.get("https://www.one-ul.com:8080/ootds/me", {
    headers: {
      Authorization: getAccessToken(),
    },
  });
  return response.data;
}

interface InfoProps {
  name: string;
  introduction: string;
}

export async function editInfo(data: InfoProps) {
  const response = await axios.put("https://www.one-ul.com:8080/member", data, {
    headers: {
      Authorization: getAccessToken(),
    },
  });
  return response.data;
}

export async function getMyInfo() {
  const response = await axios.get("https://www.one-ul.com:8080/member", {
    headers: {
      Authorization: getAccessToken(),
    },
  });
  return response.data;
}

const CLIENT_ID = process.env.SALESFORCE_CLIENT_ID;
const CLIENT_SECRET = process.env.SALESFORCE_CLIENT_SECRET;
const LOGIN_URL = process.env.SALESFORCE_LOGIN_URL;


export const getAccessToken = async () => {
  const params = new URLSearchParams();

  const add = (name, value) => params.append(name, value);

  add("grant_type", "client_credentials");
  add("client_id", CLIENT_ID);
  add("client_secret", CLIENT_SECRET);

  const response = await fetch(
    `${LOGIN_URL}/services/oauth2/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    },
  );

  const data = await response.json();

  return {
    accessToken: data.access_token,
    instanceUrl: data.instance_url,
  };
};
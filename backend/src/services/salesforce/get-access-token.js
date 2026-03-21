export const getAccessToken = async () => {
  const params = new URLSearchParams();

  const add = (name, value) => params.append(name, value);

  add("grant_type", "client_credentials");
  add("client_id", process.env.SALESFORCE_CLIENT_ID);
  add("client_secret", process.env.SALESFORCE_CLIENT_SECRET);

  const response = await fetch(
    `${process.env.SALESFORCE_LOGIN_URL}/services/oauth2/token`,
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
const baseURL = "https://jsonplaceholder.typicode.com";

async function getUsers(endpoint) {
  const res = await fetch(`${baseURL}${endpoint}`);
  return res.json();
}

export default getUsers;

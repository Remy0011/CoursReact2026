import axios from "axios"

async function getAll() {
  const list = await axios.get('https://tyradex.app/api/v1/pokemon')
  delete list.data[0];
  return list.data;
}

const calls = { getAll }
export default calls;

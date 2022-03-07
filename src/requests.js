const THECATAPI_APIKEY = "55dccb3e-d2ae-47c5-bca0-a400c7913623";

const requests = {
  fetchRandomCat: `v1/breeds/?api_key=${THECATAPI_APIKEY}`,
  fetchSiberianCats: `v1/images//v1/breeds/search?q=sib?api_key=${THECATAPI_APIKEY}`,
  // Add more fetch requests here
};

export default requests;

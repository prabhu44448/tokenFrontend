const API_URL = 'https://api.example.com';

export const fetchStores = async () => {
  const response = await fetch(`${API_URL}/stores`);
  return response.json();
};

export const generateToken = async (storeId) => {
  const response = await fetch(`${API_URL}/tokens`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ storeId }),
  });
  return response.json();
};

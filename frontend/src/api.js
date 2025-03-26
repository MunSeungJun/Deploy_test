import axios from 'axios';

export async function getData() {
  try {
    const response = await axios.get('https://deploy-test-backend.vercel.app/api/index.js');
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getSeletData() {
  try {
    const response = await axios.get(`https://deploy-test-backend.vercel.app/api/index.js`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export async function createData(data) {
  axios
    .post('https://deploy-test-backend.vercel.app/api/index.js', {
      employee_id: data.get('employee_id'),
      last_name: data.get('last_name'),
      first_name: data.get('first_name'),
      email: data.get('email'),
      phone_number: data.get('phone_number'),
      salary: data.get('salary'),
      commission_pct: data.get('commission_pct'),
      manager_id: data.get('manager_id'),
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function updateData(data) {
  axios.put(`https://deploy-test-backend.vercel.app/api/index.js`,{
    employee_id: data.get('employee_id'),
      last_name: data.get('last_name'),
      first_name: data.get('first_name'),
      email: data.get('email'),
      phone_number: data.get('phone_number'),
      salary: data.get('salary'),
      commission_pct: data.get('commission_pct'),
      manager_id: data.get('manager_id')
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
}

export async function deleteData() {
  axios
    .delete(`https://deploy-test-backend.vercel.app/api/index.js`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

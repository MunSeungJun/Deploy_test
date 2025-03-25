import axios from 'axios';

export async function getData() {
  try {
    const response = await axios.get('http://localhost:3000/list');
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getSeletData(id) {
  try {
    const response = await axios.get(`http://localhost:3000/list/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export async function createData(data) {
  axios
    .post('http://localhost:3000/add', {
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

export async function updateData(id, data) {
  axios.put(`http://localhost:3000/update/${id}`,{
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

export async function deleteData(id) {
  axios
    .delete(`http://localhost:3000/delete/${id}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

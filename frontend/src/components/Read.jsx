import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const Read = () => {
  const [fetchData, setFetchData] = useState([]); // Initialize with an empty array
  const [userId, setUserID] = useState()
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch("http://localhost:4000/user/read");
        const result = await response.json();
        // console.log(result);
        setFetchData(result.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchDataFromAPI();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/user/deleteUser/${id}`, {
        method: 'DELETE'
      })
      const result = await response.json()
      setFetchData(fetchData.filter((user) => user._id !== id))
    } catch (error) {
      alert('Failed to delete user', error);
    }
  }

  return (
    <div>
      <NavBar />

      <div className="mx-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">AGE</th>
              <th scope="col">EDIT</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {fetchData.length > 0 ? (
              fetchData.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>
                    <Link
                      to={`/edit/${item._id}`}
                      className="text-primary text-decoration-none">
                      📝
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="text-danger text-decoration-none"
                      onClick={() => handleDelete(item._id)}>
                      ❎
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Read;

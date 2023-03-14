import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './recordList.css'

const Record = (props) => (
  
  <tr>
    <td>
      <Link to={`/detail/${props.record._id}`}>
        {props.record.name} {props.record.surname}
      </Link>
    </td>

    <td>
      {props.record.pn}, {props.record.ps}
    </td>
    <td>
      {" "}
      <img src={props.record.na0} alt="bandera"></img>
    </td>

    <td>{props.record.alt}</td>
    <td>{props.record.peso}</td>

    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>
        Edit
      </Link>
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);
 

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }






  // This following section will display the table with the records of individuals.
  return (
    <>
      <div>

        <table className="table table-striped table-dark" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>

              <th>Posicion</th>
              <th>Nacionalidad</th>
              <th>Altura</th>
              <th>Peso</th>

              <th>Edad</th>
            </tr>
          </thead>
          <tbody>{recordList()}</tbody>
        </table>
      </div>
    </>
  );
}

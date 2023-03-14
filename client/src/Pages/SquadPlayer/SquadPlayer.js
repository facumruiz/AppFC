import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./SquadPlayer.css";

const Record = (props) => (
  <Grid
    container
    marginTop="50px"
    display="flex"
    wrap="wrap"
    justifyContent="center"
  >
    <Card
      sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
      className="squad-players-card"
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        width="400"
        image={props.record.img}
      />
      <CardContent className="squad-players-card">
        <Typography gutterBottom variant="h5" component="div">
          {props.record.name + " " + props.record.surname}
        </Typography>
        <Typography variant="body2" color="#fff">
          <img src={props.record.na0} alt="Nacionalidad"></img>
        </Typography>
        <Typography variant="body2" color="#fff">
          {props.record.age0}
        </Typography>
        <Typography variant="body2" color="#fff">
          {props.record.pn + " - " + props.record.ps}
        </Typography>
      </CardContent>
      <CardActions className="squad-players-card-actions">
        <Button
          as={Link}
          to={`/detail/${props.record._id}`}
          className="btn-squad-players"
          size="small"
        >
          Detalles
        </Button>
        <Button
          as={Link}
          to={`/edit/${props.record._id}`}
          className="btn-squad-players"
          size="small"
        >
          Editar
        </Button>
       

    
      </CardActions>
      <Button
            className="btn-squad-players"
            onClick={() => {
              props.deleteRecord(props.record._id);
            }}
            size="small"
          >
            Delete
          </Button>
    </Card>
  </Grid>
);

export default function SquadPlayer() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3001/record/`);

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
    await fetch(`http://localhost:3001/${id}`, {
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
      <div>{recordList()}</div>

      <h1>Plantilla</h1>

      <h2>Porteros</h2>
      <Grid
        container
        marginTop="50px"
        display="flex"
        wrap="wrap"
        justifyContent="center"
      >
        <Card
          sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
          className="squad-players-card"
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            width="400"
            image="https://s.hs-data.com/bilder/spieler/gross/36826.jpg"
          />
          <CardContent className="squad-players-card">
            <Typography gutterBottom variant="h5" component="div">
              Hugo Lloris
            </Typography>
            <Typography variant="body2" color="#fff">
              🇫🇷
            </Typography>
            <Typography variant="body2" color="#fff">
              35 años
            </Typography>
            <Typography variant="body2" color="#fff">
              POR
            </Typography>
          </CardContent>
          <CardActions className="squad-players-card-actions">
            <Button className="btn-squad-players" size="small">
              Details
            </Button>
            <Button className="btn-squad-players" size="small">
              Edit
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <div className="line-container">
        <div className="line"></div>
      </div>

      <h2>Defensas</h2>
      <Grid
        container
        marginTop="50px"
        display="flex"
        wrap="wrap"
        justifyContent="center"
      >
        <Card
          sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
          className="squad-players-card"
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            width="400"
            image="https://s.hs-data.com/bilder/spieler/gross/356980.jpg?fallback=png"
          />
          <CardContent className="squad-players-card">
            <Typography gutterBottom variant="h5" component="div">
              Cristian Romero
            </Typography>
            <Typography variant="body2" color="#fff">
              🇦🇷
            </Typography>
            <Typography variant="body2" color="#fff">
              24 años
            </Typography>
            <Typography variant="body2" color="#fff">
              DC
            </Typography>
          </CardContent>
          <CardActions className="squad-players-card-actions">
            <Button className="btn-squad-players" size="small">
              Details
            </Button>
            <Button className="btn-squad-players" size="small">
              Edit
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <div className="line-container">
        <div className="line"></div>
      </div>

      <h2>Mediocampistas</h2>
      <Grid
        container
        marginTop="50px"
        display="flex"
        wrap="wrap"
        justifyContent="center"
      >
        <Card
          sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
          className="squad-players-card"
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            width="400"
            image="https://s.hs-data.com/bilder/spieler/gross/302274.jpg"
          />
          <CardContent className="squad-players-card">
            <Typography gutterBottom variant="h5" component="div">
              Rodrigo Bentancur
            </Typography>
            <Typography variant="body2" color="#fff">
              🇺🇾
            </Typography>
            <Typography variant="body2" color="#fff">
              25 años
            </Typography>
            <Typography variant="body2" color="#fff">
              MC - PIV DEF
            </Typography>
          </CardContent>
          <CardActions className="squad-players-card-actions">
            <Button className="btn-squad-players" size="small">
              Details
            </Button>
            <Button className="btn-squad-players" size="small">
              Edit
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <div className="line-container">
        <div className="line"></div>
      </div>

      <h2>Delanteros</h2>
      <Grid
        container
        marginTop="50px"
        display="flex"
        wrap="wrap"
        justifyContent="center"
      >
        <Card
          sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
          className="squad-players-card"
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            width="400"
            image="https://s.hs-data.com/bilder/spieler/gross/179293.jpg"
          />
          <CardContent className="squad-players-card">
            <Typography gutterBottom variant="h5" component="div">
              Harry Kane
            </Typography>
            <Typography variant="body2" color="#fff">
              🏴󠁧󠁢󠁥󠁮󠁧󠁿
            </Typography>
            <Typography variant="body2" color="#fff">
              29 años
            </Typography>
            <Typography variant="body2" color="#fff">
              DEL - SD
            </Typography>
          </CardContent>
          <CardActions className="squad-players-card-actions">
            <Button className="btn-squad-players" size="small">
              Details
            </Button>
            <Button className="btn-squad-players" size="small">
              Edit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

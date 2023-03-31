import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Container, FormLabel, Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  nacionalidades,
  languages,
  maritalStatusValues,
  childsValues,
  positionValues,
  footValues,
  tecnicoValues,
  mentalValues,
  fisicoValues,
  gkValues,
  contractValues,
} from "../Utils/playersInfo";
//import InputLabel from "@mui/material/InputLabel";
//import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
//import Grid from "@mui/material/Grid";

import {
  AlternateEmail,
  Instagram,
  Phone,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import SaveIcon from "@mui/icons-material/Save";

import "../Pages/AddToSquad/AddToSquad.css";

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    img: "",
    fn: "",
    age0: "",
    na0: "",
    na1: "",
    age1: "",
    s1: "",
    s2: "",
    s3: "",
    pn: "",
    ps: "",
    ph: "",
    alt: "",
    peso: "",
    tec: "",
    fisico: "",
    mental: "",
    gk: "",
    c:"",
    agente:"",
    sc:"",
    cp:"",
    ca:"",
    phone:"",
    email:"",
    face:"",
    ig:"",
    tw:"",
    tf:"",
    bs:"",
    yt:"",
    inci:"",    

    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:3001/record/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      surname: form.surname,
      img: form.img,
      fn: form.fn,
      age0: form.age0,
      na0: form.na0,
      na1: form.na1,
      age1: form.age1,
      s1: form.s1,
      s2: form.s2,
      s3: form.s3,
      pn: form.pn,
      ps: form.ps,
      ph: form.ph,
      alt: form.alt,
      peso: form.peso,
      tec: form.tec,
      fisico: form.fisico,
      mental: form.mental,
      gk: form.gk,
      c:form.c,
      agente:form.agente,
      sc:form.sc,
      cp:form.cp,
      ca:form.ca,
      phone:form.ph,
      email:form.email,
      face:form.face,
      ig:form.ig,
      tw:form.tw,
      tf:form.tf,
      bs:form.bs,
      yt:form.yt,
      inci:form.inci,      
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:3001/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <Container sx={{ mt: 5, color: "#fff" }}>
    <Box
      component = "form"
      onSubmit={onSubmit}
      sx={{
        "& .MuiTextField-root": { mt: 5, mx: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h2>DATOS PERSONALES</h2>

      <TextField
        sx={{ width: "24ch", color: "white !important" }}
        required
        label={"Nombre"}
        id="name"
        value={form.name}
        onChange={(e) => updateForm({ name: e.target.value })}
      />
      <TextField
        sx={{ width: "24ch" }}
        required
        label="Apellido"
        id="surname"
        value={form.surname}
        onChange={(e) => updateForm({ surname: e.target.value })}
      />

      <TextField
        sx={{ width: "24ch" }}
        required
        label="IMG"
        id="img"
        value={form.img}
        onChange={(e) => updateForm({ img: e.target.value })}
      />
      <TextField
        sx={{ width: "24ch" }}
        required
        id="fn"
        label="Fecha de nacimiento"
        value={form.fn}
        onChange={(e) => updateForm({ fn: e.target.value })}
      />
      <TextField
        sx={{ width: "24ch" }}
        required
        id="outlined-required"
        label="Edad"
        value={form.age0}
        onChange={(e) => updateForm({ age0: e.target.value })}
      />

      <TextField
        sx={{ width: "24ch" }}
        required
        id="outlined-select-currency"
        select
        label="Primer nacionalidad"
        value={form.na0}
        onChange={(e) => updateForm({ na0: e.target.value })}
      >
        {nacionalidades.map((option) => (
          <MenuItem key={option.value} value={option.imgValue}>
            <img
              alt="nacionalidad"
              src={option.imgValue}
              key={option.imgValue}
            ></img>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        sx={{ width: "24ch" }}
        required
        id="outlined-select-currency"
        select
        label="Segunda nacionalidad"
        value={form.na1}
        onChange={(e) => updateForm({ na1: e.target.value })}
      >
        {nacionalidades.map((option) => (
          <MenuItem key={option.value} value={option.imgValue}>
            <img
              alt="nacionalidad"
              src={option.imgValue}
              key={option.imgValue}
            ></img>{" "}
            {option.value}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        sx={{ width: "24ch" }}
        required
        id="outlined-select-currency"
        select
        label="Idiomas"
        value={form.s1}
        onChange={(e) => updateForm({ s1: e.target.value })}
      >
        {languages.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        sx={{ width: "24ch" }}
        required
        id="outlined-select-currency"
        select
        label="Estados Civil"
        value={form.s2}
        onChange={(e) => updateForm({ s2: e.target.value })}
      >
        {maritalStatusValues.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        sx={{ width: "24ch" }}
        required
        id="outlined-select-currency"
        select
        label="Hijos"
        value={form.s3}
        onChange={(e) => updateForm({ s3: e.target.value })}
      >
        {childsValues.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      {/**/}
      <div className="line-form"></div>
      <h2>PERFIL FUTBOLÍSTICO</h2>
      <TextField
        sx={{ width: "24ch" }}
        required
        id="outlined-select-currency"
        select
        label="Posicion natural"
        value={form.pn}
        onChange={(e) => updateForm({ pn: e.target.value })}
      >
        {positionValues.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        sx={{ width: "24ch" }}
        required
        id="outlined-select-currency"
        select
        label="Posicion secundaria"
        value={form.ps}
        onChange={(e) => updateForm({ ps: e.target.value })}
      >
        {positionValues.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        sx={{ width: "24ch" }}
        required
        id="outlined-select-currency"
        select
        label="Perfil habil"
        value={form.ph}
        onChange={(e) => updateForm({ ph: e.target.value })}
      >
        {footValues.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>

      <FormLabel sx={{mt: 5}} component="legend">FÍSICO</FormLabel>

      <TextField
        sx={{ width: "14ch" }}
        label="Altura"
        value={form.alt}
        onChange={(e) => updateForm({ alt: e.target.value })}
      />
      <TextField
        sx={{ width: "14ch" }}
        label="Peso"
        value={form.peso}
        onChange={(e) => updateForm({ peso: e.target.value })}
      />
      <TextField
        sx={{ width: "14ch" }}
        label="Peso ideal"
        value={form.peso}
        onChange={(e) => updateForm({ peso: e.target.value })}
      />

      <Grid
        className="attributes"
        container
        display="flex"
        wrap="wrap"
        justifyContent="center"
        textAlign="left"
        sx={{ mt: 4 }}
      >

        <Grid xs={12} sx={{textAlign:'center'}}>
          <h3>ATRIBUTOS</h3>
        </Grid>

        <Grid xs={3}>
          <FormLabel
            sx={{ mt: 2, pl: 5 }}
            component="legend"
            className="attributes-label"
          >
            TÉCNICO
          </FormLabel>
          <ul>
            {tecnicoValues.map((option) => (
              <li key={option.value}>
                <FormControlLabel
                  value={option.value}
                  control={
                    <Checkbox
                      checked={form.tec === option.value}
                      onChange={(e) =>
                        updateForm({ tec: e.target.value })
                      }
                    />
                  }
                  label={option.value}
                />
              </li>
            ))}
          </ul>
        </Grid>

        <Grid xs={3}>
          <FormLabel
            sx={{ mt: 2, pl: 5 }}
            component="legend"
            className="attributes-label"
          >
            FISICO
          </FormLabel>
          <ul>
            {fisicoValues.map((option) => (
              <li key={option.value}>
                <FormControlLabel
                  value={option.value}
                  control={
                    <Checkbox
                      checked={form.fisico === option.value}
                      onChange={(e) =>
                        updateForm({ fisico: e.target.value })
                      }
                    />
                  }
                  label={option.value}
                />
              </li>
            ))}
          </ul>
        </Grid>
        <Grid xs={3}>
          <FormLabel
            sx={{ mt: 2, pl: 5 }}
            component="legend"
            className="attributes-label"
          >
            MENTAL
          </FormLabel>
          <ul>
            {mentalValues.map((option) => (
              <li key={option.value}>
                <FormControlLabel
                  value={option.value}
                  control={
                    <Checkbox
                      checked={form.mental === option.value}
                      onChange={(e) =>
                        updateForm({ mental: e.target.value })
                      }
                    />
                  }
                  label={option.value}
                />
              </li>
            ))}
          </ul>
        </Grid>
        <Grid xs={3}>
          <FormLabel
            sx={{ mt: 2, pl: 5 }}
            component="legend"
            className="attributes-label"
          >
            PORTERO
          </FormLabel>
          <ul>
            {gkValues.map((option) => (
              <li key={option.value}>
                <FormControlLabel
                  value={option.value}
                  control={
                    <Checkbox
                      checked={form.gk === option.value}
                      onChange={(e) =>
                        updateForm({ gk: e.target.value })
                      }
                    />
                  }
                  label={option.value}
                />
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>

      <div>
        <TextField
          sx={{ width: { xs: "30ch", sm: "65ch" } }}
          label="Características"
          id="outlined-multiline-static"
          rows={6}
          multiline
          value={form.c}
          onChange={(e) => updateForm({ c: e.target.value })}
        />
      </div>

      <div className="line-form"></div>
      
      <h2>CONTRATO</h2>

      <TextField
          sx={{width: '24ch'}}
          id="outlined-required"
          label="Salario bruto"
          defaultValue=""
      />

      <TextField
          sx={{width: '24ch'}}
          id="outlined-required"
          label="Alta en SS"
          defaultValue=""
      />

      <TextField
          sx={{width: '24ch'}}
          id="outlined-required"
          label="Comienzo"
          defaultValue=""
      />

      <TextField
          sx={{width: '24ch'}}
          id="outlined-required"
          label="Final"
          defaultValue=""
      />

      <TextField
        sx={{ width: { xs: "30ch", sm: "24ch" } }}
        required
        label="Agente"
        id="Agente"
        value={form.agente}
        onChange={(e) => updateForm({ agente: e.target.value })}
      />

      <FormLabel sx={{mt: 5}} component="legend">PRIMAS</FormLabel>

      <TextField
          sx={{width: '24ch'}}
          id="outlined-required"
          label="Portería en 0"
          defaultValue=""
      />

      <TextField
          sx={{width: '24ch'}}
          id="outlined-required"
          label="Asistencia"
          defaultValue=""
      />

      <TextField
          sx={{width: '24ch'}}
          id="outlined-required"
          label="Gol"
          defaultValue=""
      />

      <TextField
          sx={{width: '24ch'}}
          id="outlined-required"
          label="Clasificar a Playoff"
          defaultValue=""
      />

      <TextField
          sx={{width: '24ch'}}
          id="outlined-required"
          label="Ganar la Liga"
          defaultValue=""
      />

      <div className="line-form"></div>

      <h2>CONTACTO Y LINKS</h2>
      <TextField
        sx={{ width: "24ch" }}
        required
        label={<Phone />}
        id="img"
        value={form.phone}
        onChange={(e) => updateForm({ phone: e.target.value })}
      />
      <TextField
        sx={{ width: "24ch" }}
        required
        label={<AlternateEmail />}
        id="img"
        value={form.email}
        onChange={(e) => updateForm({ email: e.target.value })}
      />
      <FormLabel sx={{ mt: 5 }} component="legend">
        REDES SOCIALES
      </FormLabel>
      <TextField
        sx={{ width: "24ch" }}
        required
        label={<FacebookIcon />}
        id="img"
        value={form.face}
        onChange={(e) => updateForm({ face: e.target.value })}
      />
      <TextField
        sx={{ width: "24ch" }}
        required
        label={<Instagram />}
        id="img"
        value={form.ig}
        onChange={(e) => updateForm({ ig: e.target.value })}
      />
      <TextField
        sx={{ width: "24ch" }}
        required
        label={<Twitter />}
        id="img"
        value={form.tw}
        onChange={(e) => updateForm({ tw: e.target.value })}
      />
      <FormLabel sx={{ mt: 5 }} component="legend">
        LINKS
      </FormLabel>
      <TextField
        sx={{ width: "24ch" }}
        required
        label="Transfermarkt"
        id="img"
        value={form.tf}
        onChange={(e) => updateForm({ tf: e.target.value })}
      />
      <TextField
        sx={{ width: "24ch" }}
        required
        label="Besoccer"
        id="img"
        value={form.bs}
        onChange={(e) => updateForm({ bs: e.target.value })}
      />
      <TextField
        sx={{ width: "24ch" }}
        required
        label={<YouTube />}
        id="img"
        value={form.yt}
        onChange={(e) => updateForm({ yt: e.target.value })}
      />
      <div className="line-form"></div>

      <h2>INCIDENCIAS</h2>

      <div>
        <TextField
          sx={{ width: { xs: "30ch", sm: "65ch" } }}
          label="Ingresar incidencias"
          id="outlined-multiline-static"
          rows={6}
          multiline
          value={form.inci}
          onChange={(e) => updateForm({ inci: e.target.value })}
        />
      </div>

      <div className="form-group">
        <Button
          type="submit"
          sx={{
            mt: 5,
            mb: 5,
            backgroundColor: "#9b0181 !important",
            color: "#fff !important",
          }}
          size="small"
          startIcon={<SaveIcon />}
          variant="contained"
          value="Create person"
        >
          Guardar
        </Button>
      </div>
    </Box>
  </Container>
  );
}

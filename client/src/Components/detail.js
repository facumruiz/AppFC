import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Detail() {
  const [form, setForm] = useState({
    name: "",
    surname:"",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:3001/record/${params.id.toString()}`);

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





  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h3>Detalles del jugador</h3>
      <img src={form.img}  alt="img-jugador"></img>
      {form.img}
        <h1>Posicion natural: {form.pn}</h1>
        <h1>Posicion secundaria: {form.ps}</h1>
        <h1>Perfil habil: {form.ph}</h1>
        <h1>Altura: {form.alt}</h1>
        <h1>Peso: {form.peso}</h1>
        <h1>Atributo Tecnico: {form.tec}</h1>
        <h1>Atributo Fisico: {form.fisico}</h1>
        <h1>Atributo Mental: {form.mental}</h1>
        <h1>Atributo Portero: {form.gk}</h1>
        <h1>Caracteristicas: {form.c}</h1>
        <h1>Agente: {form.agente}</h1>
        <h1>Situacion Contractual: {form.sc}</h1>
        <h1>Contratado por: {form.cp}</h1>
        <h1>Cedido a: {form.ca}</h1>
        <h1>Telefono: {form.ph}</h1>
        <h1>Email: {form.email}</h1>
        <h1>Facebook: {form.face}</h1>
        <h1>Instagram: {form.ig}</h1>
        <h1>Twitter: {form.tw}</h1>
        <h1>Transfermarkt: {form.tf}</h1>
        <h1>Besoccer: {form.bs}</h1>
        <h1>YouTube: {form.yt}</h1>
        <h1>incidencias: {form.inci}</h1>
        <br />

  
    </div>
  );
}

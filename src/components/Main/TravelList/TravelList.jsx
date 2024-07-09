import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//import TravelItem from "./TravelItem";
import TravelCard from "./TravelCard/TravelCard.jsx";
import data from "./data.js"; // carga inicial de datos

const TravelList = () => {
  // Estado del componente que
  // representa los destinos de viaje
  // [{},{},{},{},{},{}]
  const [items, setItems] = useState(data);
  const [values, setValues] = useState({
    title: '',
    desc: '',
    img_url: ''
  });



  // Iteramos sobre el array de objetos y creamos un TravelItem por cada uno
  // const renderItems = () => data.map(item => <TravelItem key={uuidv4()} title={item.title} desc={item.desc} img_url={item.img_url} />);

  const renderItems = () =>
    items.map((item, i) => (
      <TravelCard
        key={uuidv4()}
        dataItem={item}
        deleteCard={() => deleteItem(i)}
        editCard={() => editItem(i)}
      />
    ));

  const clearItems = () => setItems([]);

  const resetItems = () => setItems(data);

  //[{},{},{},{},{},{}] --> items
  const deleteItem = (pos) => {
    const remainingItems = items.filter((item, index) => index !== pos);
    setItems(remainingItems);
  };

  const editItem = (pos) => {
    alert("editando item " + pos);
    // Lógica para editar un item
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const img_url = e.target.img_url.value;

    const newItem = { title, desc, img_url };
    console.log(newItem);
    setItems([...items, newItem]); // Actualizar el estado con el nuevo item
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="travel-list">
      <div>
        <button onClick={clearItems}>Borrar todos</button>
        <button onClick={resetItems}>Recargar</button>
        <button onClick={() => deleteItem(1)}>Borrar segundo</button>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="name">Título</label>
          <input type="text" name="title" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="price">Descripción</label>
          <input type="text" name="desc" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="url">URL imagen</label>
          <input type="url" name="img_url" onChange={handleChange} />
        </div>

        {
          values.title && values.desc && values.img_url ?
            <button type="submit">Crear destino</button> :
            <i>Por favor, rellena todos los campos</i>
        }

      </form>
      <section>
        {renderItems()}
      </section>
    </section>
  );
};

export default TravelList;

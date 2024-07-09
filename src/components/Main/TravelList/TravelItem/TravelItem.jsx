import React from "react";
import "./TravelItem.css";

const TravelItem = ({ 
  dataItem: { title, desc, img_url }, 
  deleteCard,
  editCard, 
}) => {
  //console.log(props);
  //const {title,desc,img_url} = props.dataItem;

  return (
    <article className="travel-item">
      <h3>Titulo:{title}</h3>
      <p>Descripción:{desc}</p>
      <img src={img_url} alt={title} className="picture_item" />
      <br />
      <button onClick={deleteCard}>Borrar</button>
      <button onClick={editCard}>Editar</button>
    </article>
  );
};

export default TravelItem;

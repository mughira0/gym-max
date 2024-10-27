import React from "react";
import classes from "./card.module.css";
function InfluencerCard({ item }) {
  return (
    <div className={classes.main}>
      <div className={classes.image}>
        <img src={item?.image} />
      </div>

      <div className={classes.content}>
        {item?.title && <h5>{item?.title}</h5>}
        {item?.position && <p>{item?.position}</p>}
        {item?.description && <p>{item?.description}</p>}
      </div>
    </div>
  );
}

export default InfluencerCard;

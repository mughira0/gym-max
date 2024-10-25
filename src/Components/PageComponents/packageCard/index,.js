import React from "react";
import { FaCheck } from "react-icons/fa";
import Button from "../../Core/Button";
import classes from "./packageCard.module.css";
function PackageCard({ index, item }) {
  const temp = String(item?.price);
  const price = temp?.split(".");
  return (
    <div className={[classes.main, index == 1 && classes.selected].join(" ")}>
      <div className={classes.header}>
        <h5>{item?.title}</h5>
        <p>Free trial 30 days.</p>
      </div>
      <div className={classes.priceSection}>
        <h1>
          {" "}
          <sup>$</sup>
          {price[0]}
          <sup>{price[1]}</sup>
        </h1>
        <p>{item?.type}</p>
      </div>

      <div className={classes.perks}>
        {item?.perks?.map((ele, index) => {
          return (
            <div className={classes.perk}>
              <FaCheck />
              <p key={index}>{ele}</p>
            </div>
          );
        })}
      </div>

      <div className={classes.button}>
        <Button
          label="Get Started"
          className={classes.button}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default PackageCard;

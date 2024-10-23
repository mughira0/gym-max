import React from "react";
import classes from "./TabsComponent.module.css";
function TabsComponent({ options, tab, setTab }) {
  return (
    <div className={classes._tabs}>
      {options.map((ele, index) => (
        <div
          onClick={() => setTab(ele)}
          className={[
            classes.tab,
            ele?.value == tab?.value && classes.selectedTab,
          ].join(" ")}
        >
          <p>{ele?.label}</p>
        </div>
      ))}
    </div>
  );
}

export default TabsComponent;

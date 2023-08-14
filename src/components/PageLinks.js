import React from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = (props) => {
  return (
    <ul className={props.class1} id={props.id}>
      {pageLinks.map((link) => {
        return (
          <PageLink
            key={link.id}
            href={link.href}
            class={props.class2}
            text={link.text}
          />
        );
      })}
    </ul>
  );
};

export default PageLinks;

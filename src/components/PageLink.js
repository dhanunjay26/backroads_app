import React from 'react'

const PageLink = (props) => {
  return (
    <li>
      <a href={props.href} className={props.class}>
        {props.text}
      </a>
    </li>
  );
}

export default PageLink

import React from 'react'
import { socialLinks } from '../data';

const SocialLink = (props) => {
  return (
    <ul className={props.class1}>
      {socialLinks.map((link) => {
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              className={props.class2}
              rel="noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLink

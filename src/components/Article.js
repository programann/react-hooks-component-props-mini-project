import React from "react";

const Article = ({ title, date, preview }) => {
  const articleDate = date || 'January 1, 1970'
  
  return (
    <article>
      <h3>{title}</h3>
      <small>{articleDate}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article
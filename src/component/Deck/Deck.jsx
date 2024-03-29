import React, {useState} from "react";
import Card from "../Card/Card";

import signs from "../../signs";

function Deck() {
  const [zodiacSign, setZodiacSign] = useState(signs);

  function clickHandler(evt) {
    evt.preventDefault();
    let name = evt.target.getAttribute("name");
    let n = evt.target.getAttribute("data-card-id");

    let recItem = zodiacSign[n];
    recItem.follow = (zodiacSign[n][name]) ? false : true;

    setZodiacSign(prevItems => {
      prevItems[n] = recItem;
      return [...prevItems];
    });

  }

  function tagLinks(v, i, arr) {
    return (arr.length-1 !== i) ? <span key={i} className="hash-tag"><a href={"#"+v}>{"#"+v}</a>{", "}</span> : <span key={i} className="hash-tag">{"and " }<a href={"#"+v}>{"#"+v}</a></span>;
  }

  console.log("go");
  return (
    <section className="card-deck">

      {zodiacSign.map((d,i)=> {
        return (
          (zodiacSign) ?
            (<Card
              key={i}
              id={i}
              follow={d.follow}
              title={d.title}
              bannerURL={d.bannerURL}
              portrait={d.portrait}
              region={d.region}
              email={d.email}
              zodiacDate={d.zodiacDate}
              caption={d.caption}
              tags={d.tags.map(tagLinks)}
              message={d.message}
              clickHandler={clickHandler}
            />)
            :
            null
        )

        }
      )}
    </section>

  );
}

export default Deck;
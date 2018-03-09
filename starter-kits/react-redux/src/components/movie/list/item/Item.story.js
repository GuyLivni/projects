import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { text, number } from "@storybook/addon-knobs";

import MovieItem from "./";

storiesOf("MovieItem", module).add(
  "With props",
  withInfo({
    text: `Simple movie item with props.`
  })(() => (
    <MovieItem
      name={text("name", "Batman beyond")}
      summary={text(
        "summary",
        "tells the story of Terry McGinnis was just an ordinary teenager...until his father was mysteriously murdered. Suspecting foul play at his father's company Wayne/Powers Corporation, Terry meets Bruce Wayne and learns a secret identity hidden for decades. Now too old to battle injustice, Wayne is a bitter shell of his former self and refuses to help. So Terry does what any brash young kid would do: steal the Batsuit and take matters into his own hands! Vowing to avenge his father's death, Terry dons the high-tech suit - tricked out with jetpacks for flying, a supersensitive microphone for eavesdropping and even camouflage capabilities - in search of his father's assassin."
      )}
      genres={text("genres", "Action, Adventure, Science-Fiction")}
      image={text(
        "image",
        "http://static.tvmaze.com/uploads/images/medium_portrait/4/10842.jpg"
      )}
      rating={number("rating", 10)}
    />
  ))
);

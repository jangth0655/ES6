{
  const settings = {
    color: {
      chosen_color: "dark",
    },
  };

  let chosenColor = "blue";

  console.log(chosenColor);

  //overwrite
  ({
    color: { chosen_color: chosenColor = "light" },
  } = settings);

  console.log(chosenColor);
}

{
  // function
  function saveSettings({
    followAlert,
    unfollowAlert,
    mrkAlert,
    color = "green",
  }) {
    console.log(color);
  }

  saveSettings({
    followAlert: true,
    unfollowAlert: true,
    mrkAlert: true,
    themeColor: "green",
  });
  // value shorthands
  const follow = checkFollow();
  const alert = checkAlert();

  const settings = {
    notification: {
      follow,
      alert,
    },
  };

  // swapping
  let mon = "Sat";
  let sat = "Mon";
  // 바고 싶은 변수들을 가지고
  [sat, mon] = [mon, sat];
  console.log(sat, mon);
}

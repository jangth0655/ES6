{
  const settings = {
    notifications: {
      //follow: true,
      alerts: true,
      unFollow: false,
    },
    color: {
      theme: "dark",
    },
  };

  const {
    notifications: { follow = "default value", alerts, unFollow } = {},
    color: { theme = "light" },
  } = settings;

  // console.log(follow, alerts, unFollow);
  // console.log(theme);
}

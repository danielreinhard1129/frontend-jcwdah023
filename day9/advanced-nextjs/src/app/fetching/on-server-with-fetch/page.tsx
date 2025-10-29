const OnServerWithFetch = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const randomUser = await response.json();

  return (
    <div>
      <h1>OnServerWithFetch</h1>
      <p>{randomUser.results[0].email}</p>
    </div>
  );
};

export default OnServerWithFetch;

import axios from "axios";

const OnServerThirdParty = async () => {
  const randomUser = await axios.get("https://randomuser.me/api/");

  return (
    <div>
      <h1>OnServerThirdParty</h1>
      <p>{randomUser.data.results[0].email}</p>
    </div>
  );
};

export default OnServerThirdParty;

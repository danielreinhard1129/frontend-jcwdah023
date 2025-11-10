import { auth } from "@/auth";
import { redirect } from "next/navigation";
import WritePage from "./components/WritePage";

const Write = async () => {
  const session = await auth();

  if (!session?.user.email) return redirect("/login");

  return <WritePage />;
};

export default Write;

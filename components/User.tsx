import { auth } from "../auth";

export default async function LoggedInUser() {
  const session = await auth();

  if (!session?.user) return;

  return (
    <button
      className="flex justify-center w-full h-[48px]  gap-2  grow items-center rounded-md bg-gray-50 p-3 text-sm 
    font-medium hover:bg-primary-foreground hover:text-secondary 
    md:flex-none md:justify-start md:p-2 md:px-2"
    >
      <img
        className="w-6 rounded-2xl"
        src={session?.user?.image ? session.user.image : "placeholder.svg"}
      />
      <div className="hidden md:block">
        {session?.user?.name === "User" ? "Test User" : session.user.name}
      </div>
    </button>
  );
}

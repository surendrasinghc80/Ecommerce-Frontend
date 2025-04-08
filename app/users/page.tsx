import User from "@/server/models/User";
import type { IUser } from "@/server/models/User";

export const dynamic = "force-dynamic";

async function getData(): Promise<{ users: IUser[] }> {
  const users = await User.findAll();
  const plainUsers = users.map((user) => user.get({ plain: true })) as IUser[];
  return { users: plainUsers };
}

export default async function Page() {
  const { users } = await getData();
  return (
    <div className="min-h-screen flex-col justify-between p-10">
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p className="p-4 text-2xl font-bold">
              {user.firstName} {user.lastName} <br />
            </p>
            <p className="p-4">Created At: {user.createdAt.toString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

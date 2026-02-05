import DummyTable from "./_components/DummyTable";
import UserTable from "./_components/UserTable";
import "./App.css";
import { Button } from "./components/ui/button";
import useUser from "./hooks/useUser";

function App() {
  const { user, loading, error } = useUser();
  return (
    <div>
      <div className="flex justify-around">
        <h1 className="text-3xl font-bold p-2">User Management</h1>
        <Button className="ml-2" variant="default" size={"lg"}>
          Add User
        </Button>
      </div>
      {loading ? (
        <DummyTable />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <UserTable users={user} onEdit={() => {}} onDelete={() => {}} />
      )}
    </div>
  );
}

export default App;

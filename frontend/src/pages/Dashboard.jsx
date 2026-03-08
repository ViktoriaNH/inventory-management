import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Header } from "../layouts/Header";
import { LatestInvenyories } from "../section/LatestInventaries";
import { TopInventories } from "../section/TopInventories";

export const Dashboard = () => {
  const navigate = useNavigate();

  const toCreate = () => navigate("/inventory/create");

  return (
    <>
      <Header />
      <main className="container p-1 d-flex gap-3">
        <TopInventories />
        <LatestInvenyories />
      </main>
      <Button onClick={toCreate} text="Add new inventory" />
    </>
  );
};

import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Header } from "../layouts/Header";
import { LatestInventories } from "../section/LatestInventories";
import { TopInventories } from "../section/TopInventories";

export const MainPage = () => {
  const navigate = useNavigate();

  const toCreate = () => navigate("/inventory/create");

  return (
    <>
      <Header />
      <main className="container p-1 d-flex justify-content-between gap-1">
        <TopInventories />
        <LatestInventories />
      </main>
      <Button onClick={toCreate} text="Add new inventory" />
    </>
  );
};

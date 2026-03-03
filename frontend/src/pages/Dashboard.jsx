import { Header } from "../layouts/Header";
import { LatestInvenyories } from "../section/LatestInventaries";
import { TopInventories } from "../section/TopInventories";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="container p-1">
        <TopInventories />
        <LatestInvenyories />
      </main>
    </>
  );
};

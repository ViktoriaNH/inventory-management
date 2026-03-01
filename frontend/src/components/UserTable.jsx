import TableBody from "./TableBody";
import TableHeader from "./TableHeader/TableHeader";

export const UserTable = () => {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered border-primary shadow mb-0">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
};


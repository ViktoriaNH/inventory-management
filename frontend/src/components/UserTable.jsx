import {TableBody} from "./TableBody";
import {TableHeader} from "./TableHeader";

export const UserTable = ({ data = [], columns = [] }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered border-primary shadow mb-0">
        <TableHeader columns={columns}/>
        <TableBody data={data} columns={columns} />
      </table>
    </div>
  );
};


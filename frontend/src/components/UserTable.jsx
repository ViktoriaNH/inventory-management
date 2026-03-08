import {TableBody} from "./TableBody";
import {TableHeader} from "./TableHeader";

export const UserTable = ({ data = [], columns = [] }) => {
  return (
    <div className="table-responsive mt-1">
      <table className="table table-hover table-bordered border-dark mb-0">
        <TableHeader columns={columns}/>
        <TableBody data={data} columns={columns} />
      </table>
    </div>
  );
};


export const TableHeader = () => {
  return (
    <thead className="bg-transparent">
      <tr className="border-primary border-2">
        <th scope="col" className="bg-transparent text-secondary">
          <input type="checkbox" />
        </th>

        <th className="fw-bold bg-transparent border-primary border-2 text-muted"></th>
      </tr>
    </thead>
  );
};

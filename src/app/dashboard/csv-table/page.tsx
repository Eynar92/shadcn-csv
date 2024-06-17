import { CsvDataTable } from "./csv-data-table";
import { csvColumns } from './csv-columns';

export default function CsvPage() {
    return (
        <div>
            <CsvDataTable columns={csvColumns} data={[]}/>
        </div>
    )
}

"use client"
import { useEffect, useState } from "react"
import Papa from "papaparse";

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { type Product } from "@/data/products.data"

interface DataTableProps<TData extends Product, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function CsvDataTable<TData extends Product, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [dataCsv, setDataCsv] = useState<Product[]>(data);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const table = useReactTable({
        data: dataCsv,
        columns: columns as ColumnDef<Product, any>[],
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    })


    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        Papa.parse(file, {
            header: true,
            complete: (results) => {
                const parsedData = results.data.map((item: any) => ({
                    name: item.name,
                    priceBuy: parseFloat(item.priceBuy.replace(',', '.')),
                    priceSell: parseFloat(item.priceSell.replace(',', '.')),
                    category: item.category,
                }));
                setDataCsv(parsedData);
            },
            skipEmptyLines: true,
        });
    };

    useEffect(() => {
        console.log(dataCsv);
    }, [dataCsv]);

    return (
        <div>
            <div className="flex items-center justify-between py-4">
                <Input
                    placeholder="Filter by client name, buy and sell pricing or category..."
                    value={(table.getColumn("category")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => {
                        // table.getColumn("category")?.setFilterValue(event.target.value);
                        table.getColumn("category")?.setFilterValue(event.target.value);
                    }
                    }
                    className="max-w-sm"
                />

                <Button
                    onClick={() => document.getElementById('csv')?.click()}
                >
                    Importar CSV
                </Button>
                <Input
                    id="csv"
                    type="file"
                    accept=".csv"
                    className="hidden"
                    onChange={handleFileUpload}
                />
            </div>
            <div className="rounded-md border overflow-hidden">
                <Table>
                    <TableHeader className="bg-primary">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="text-primary-foreground">
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end">
                {/* <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div> */}

                <div className="flex items-center justify-end space-x-2 py-4">
                    <Select
                        onValueChange={(value) => {
                            table.setPageSize(parseInt(value));
                        }}
                    >
                        <SelectTrigger className="w-32">
                            <SelectValue placeholder="10 Rows" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Rows Per Page</SelectLabel>
                                <SelectItem value="10">10 Rows</SelectItem>
                                <SelectItem value="25">20 Rows</SelectItem>
                                <SelectItem value="30">30 Rows</SelectItem>
                                <SelectItem value="40">40 Rows</SelectItem>
                                <SelectItem value="50">50 Rows</SelectItem>
                                <SelectItem value="100">100 Rows</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

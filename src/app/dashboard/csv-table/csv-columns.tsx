'use client';
import { Button } from '@/components/ui/button';
import { type Product } from '@/data/products.data';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ColumnDef, FilterFn, Row, SortDirection } from '@tanstack/react-table';

const myCustomFilterFn: FilterFn<Product> = (
    row: Row<Product>,
    columnId: string,
    filterValue: string,
    addMeta: (meta: any) => void
) => {

    filterValue = filterValue.toLowerCase();

    const filterParts = filterValue.split(" ");
    const rowValues = `${row.original.name} ${row.original.priceBuy} ${row.original.priceSell} ${row.original.category}`.toLowerCase();

    return filterParts.every(part => rowValues.includes(part));
}

const SortedIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {
    if (isSorted === 'asc') return <ChevronDownIcon className='size-4' />

    if (isSorted === 'desc') return <ChevronDownIcon className='size-4 transform rotate-180' />

    return null;
}

export const csvColumns: ColumnDef<Product>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <SortedIcon isSorted={column.getIsSorted()} />
                </Button>
            )
        },
    },
    {
        accessorKey: "priceBuy",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Price Buy
                    <SortedIcon isSorted={column.getIsSorted()} />
                </Button>
            )
        },
    },
    {
        accessorKey: "priceSell",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Price Sell
                    <SortedIcon isSorted={column.getIsSorted()} />
                </Button>
            )
        },
    },
    {
        accessorKey: "category",
        filterFn: myCustomFilterFn,
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Category
                    <SortedIcon isSorted={column.getIsSorted()} />
                </Button>
            )
        },
    },
]
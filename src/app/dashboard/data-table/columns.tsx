'use client';

import { Badge } from '@/components/ui/badge';
import { Payment } from '@/data/payments.data';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const status = row.getValue("status") as string;
            const variant = {
                pending: "info",
                processing: "secondary",
                success: "success",
                failed: "destructive",
            }[status] ?? ('default') as any;

            return <Badge variant={variant} capitalize>{status}</Badge>
        },
    },
    {
        accessorKey: 'amount',
        header: () => <div className="text-left">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount);

            return <div className="font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: 'email',
        header: 'emain',
    },
    {
        accessorKey: 'clientName',
        header: 'Client Name',
    },
]
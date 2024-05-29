import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { RocketIcon } from '@radix-ui/react-icons'
import React from 'react'

export default function AlertPage() {
    return (
        <div className='grid gap-3'>
            <Alert>
                <RocketIcon className='size-4' />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>

            <Alert variant="destructive">
                <RocketIcon className='size-4' />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>

            <Alert variant="success">
                <RocketIcon className='size-4' />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>
        </div>
    )
}

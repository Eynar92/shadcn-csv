"use client";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CaretRightIcon, EnvelopeClosedIcon, ReloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function ButtonPage() {
    return (
        <div className="grid grid-cols-5 gap-2">
            <Button>default</Button>
            <Button variant="destructive">destructive</Button>
            <Button variant="ghost">ghost</Button>
            <Button variant="link">link</Button>
            <Button variant="outline">outline</Button>
            <Button variant="secondary">secondary</Button>
            <Button disabled>disabled</Button>
            <Button
                onClick={() => console.log('Hola Mundo')}
            >
                click Me
            </Button>
            <Button variant="success">success</Button>
            <Button capitalize={false}>capitalize false</Button>
            <Button variant="outline" size="icon">
                <CaretRightIcon className="size-4" />
            </Button>
            <Button>
                <EnvelopeClosedIcon className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                cargando
            </Button>
            <Button asChild>
                <Link href="/dashboard/accordion">accordion</Link>
            </Button>
        </div>
    )
}

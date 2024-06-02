import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function AvatarPage() {
    return (
        <div className="flex items-center justify-center h-[500px]">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="m-2">@shadcn</p>
        </div>
    )
}

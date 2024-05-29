import { Badge } from "@/components/ui/badge";

export default function BadgePage() {
    return (
        <div className="flex gap-4">
            <Badge capitalize>default</Badge>
            <Badge variant="destructive">destructive</Badge>
            <Badge variant="outline">outline</Badge>
            <Badge variant="secondary">secondary</Badge>
            <Badge variant="info">info</Badge>
            <Badge variant="success">success</Badge>
            <Badge capitalize variant="success">success capitalize</Badge>
        </div>
    )
}

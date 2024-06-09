'use client';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SonnerPage() {
    return (
        <div className="grid grid-cols-4 gap-4">
            <Button
                variant="outline"
                onClick={() =>
                    toast("Event has been created", {
                        duration: 1000,
                        description: `Sunday, December ${new Date().getFullYear()}, 2023 at 9:00 AM`,
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        },
                    })
                }
            >
                Show Toast
            </Button>
            
            <Button
                variant="outline"
                onClick={() =>
                    toast.success("Event has been created", {
                        duration: 1000,
                        position: "top-right",
                        description: `Sunday, December ${new Date().getFullYear()}, 2023 at 9:00 AM`,
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        },
                    })
                }
            >
                Show Toast Success
            </Button>
            
            <Button
                variant="outline"
                onClick={() =>
                    toast.info("Event has been created", {
                        duration: 1000,
                        position: "top-left",
                        description: `Sunday, December ${new Date().getFullYear()}, 2023 at 9:00 AM`,
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        },
                    })
                }
            >
                Show Toast Info
            </Button>
        </div>
    )
}

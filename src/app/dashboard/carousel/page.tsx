'use client'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselPage() {
    return (
        <div className="flex justify-center w-full">
            <Carousel
                className="w-full max-w-xs"
                autoplay={1500}
                // plugins={[Autoplay({ delay: 2000 })]}
                opts={{
                    // dragFree: true,
                    loop: true,
                }}
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex items-center justify-center" />
                <CarouselNext className="hidden sm:flex items-center justify-center" />
            </Carousel>
        </div>
    )
}

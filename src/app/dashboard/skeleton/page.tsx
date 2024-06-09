import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Image from "next/image";

const getData = async () => {

    await new Promise(resolve => setTimeout(resolve, 3000));

    return '123456789'.split('');
}

export default async function SkeletonPage() {

    const data = await getData();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {
                data.map(item => (
                    <Card key={item}>
                        <CardHeader className='flex flex-row gap-4'>
                            <Image
                                src="https://github.com/shadcn.png"
                                alt="Shadcn"
                                width={40}
                                height={40}
                                className="rounded-full mr-2 size-10"
                            />
                            <div>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </div>
                        </CardHeader>

                        <CardFooter className='flex justify-end'>
                            <Button>Más</Button>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}

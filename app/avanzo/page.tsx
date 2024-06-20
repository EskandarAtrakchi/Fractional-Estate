/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xFVtlDrwQWT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <main className="container mx-auto py-12 px-4 md:px-6">
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Luxury Penthouse</CardTitle>
              <CardDescription>
                Fractional ownership of a stunning penthouse in the heart of the
                city.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/house1.jpg"
                  width={300}
                  height={200}
                  alt="Penthouse"
                  className="rounded-lg object-cover"
                />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Price per NFT</span>
                    <span className="text-lg font-semibold">$5,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Ownership</span>
                    <span className="text-lg font-semibold">2.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Rental Yield</span>
                    <span className="text-lg font-semibold">6%</span>
                  </div>
                  <Button className="w-full">Buy NFT</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Beachfront Villa</CardTitle>
              <CardDescription>
                Fractional ownership of a luxurious villa with stunning ocean
                views.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/house2.jpg"
                  width={300}
                  height={200}
                  alt="Villa"
                  className="rounded-lg object-cover"
                />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Price per NFT</span>
                    <span className="text-lg font-semibold">$10,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Ownership</span>
                    <span className="text-lg font-semibold">1%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Rental Yield</span>
                    <span className="text-lg font-semibold">8%</span>
                  </div>
                  <Button className="w-full">Buy NFT</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>City Apartment</CardTitle>
              <CardDescription>
                Fractional ownership of a modern apartment in the heart of the
                city.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/house3.jpg"
                  width={300}
                  height={200}
                  alt="Apartment"
                  className="rounded-lg object-cover"
                />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Price per NFT</span>
                    <span className="text-lg font-semibold">$2,500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Ownership</span>
                    <span className="text-lg font-semibold">4%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Rental Yield</span>
                    <span className="text-lg font-semibold">5%</span>
                  </div>
                  <Button className="w-full">Buy NFT</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">How it Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <ShoppingCartIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">
                Buy Fractional Ownership
              </h3>
              <p className="text-muted-foreground">
                Purchase NFTs that represent a percentage of ownership in a
                specific property.
              </p>
            </div>
            <div className="space-y-4">
              <ReceiptIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Earn Rental Income</h3>
              <p className="text-muted-foreground">
                When the property is rented out, the NFT holders receive their
                proportional share of the rental income.
              </p>
            </div>
            <div className="space-y-4">
              <TruckIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Trade NFTs</h3>
              <p className="text-muted-foreground">
                Buy, sell, and trade your property-backed NFTs on the
                decentralized marketplace.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

function ReceiptIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17.5v-11" />
    </svg>
  )
}



function TruckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}
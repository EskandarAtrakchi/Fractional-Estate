'use client';

import Link from "next/link";
import Image from 'next/image';

export default function HomePage() {
  return (
    
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 relative overflow-hidden">
        <div className="absolute bg-gradient-to-r from-[#0077b6] to-[#00b894] opacity-10 blur-[100px]" />
        <section className="w-full py-12 sm:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Secure Your Digital Fortress
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Cyber Secure provides cutting-edge cybersecurity solutions
                    to protect your business from evolving threats.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/avanzo/"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Connect Wallet
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0077b6] to-[#00b894] opacity-10 blur-[100px]" />
                <div className="relative z-10">
                  <div className="w-full h-full">
                    <div />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg px-3 py-1 text-sm">
                  Cybersecurity Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Protect Your Digital Assets
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Cyber Secure offers a comprehensive suite of cybersecurity
                  services to safeguard your business from cyber threats. From
                  network security to incident response, we have got you covered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Smart Investing, Smart Solution.
                      </h3>
                      <p className="text-muted-foreground">
                        Every Pool of investment is tight to real estate value
                        securing the value of investors and generating annual
                        income to them, Your money is always secured with
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Incident Response</h3>
                      <p className="text-muted-foreground">
                        Our team of cybersecurity experts will help you respond
                        quickly and effectively to security incidents.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 justify-center items-center">
                      <Image
                        src="/App-Store_button.png"
                        width="150"
                        height="150"
                        alt="Mobile-App"
                      />
                      <Image
                        src="/Google-Play_button.png"
                        width="150"
                        height="150"
                        alt="Mobile-App"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/mobile.png"
                  width="400"
                  height="400"
                  alt="Mobile-App"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Safeguard Your Digital Future
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Partner with Cyber Secure to protect your business from evolving
                cyber threats and ensure your digital assets remain secure.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
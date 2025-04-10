import { auth } from "@clerk/nextjs/server";

import { Inter, Domine } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
});

export default async function Home() {

  const { userId, redirectToSignIn } = await auth()
  if (!userId) return redirectToSignIn()

  return (
    <>
      <div className={`${inter.className}`}>
        <div className="h-[20vh] w-[100vw] flex flex-col justify-center align-middle content-center text-center p-5">
          <h2 className="text-4xl font-bold">Share Reviews and Lists about your favorite books</h2>
          <h2 className="text-4xl font-bold">Keep track on your reading</h2>
        </div>
      </div>
    </>
  );
}

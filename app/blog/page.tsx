import type { Metadata } from "next/types";

export const dynamic = "force-dynamic";

const fetcher = async () => {
  // data from db
  const data = await new Promise((res) =>
    setTimeout(() => res(`Hello World`), 3000)
  );

  return data as string;
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetcher();

  return { title: data };
}

export default async function Page() {
  const data = await fetcher();

  return <main>{data}</main>;
}


//adding generateMetadata function will break loading.tsx 
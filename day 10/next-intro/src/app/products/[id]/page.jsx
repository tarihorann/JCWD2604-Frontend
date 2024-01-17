/** @format */
// "use client";

// import { usePathname, useRouter, useParams } from "next/navigation";

function Page({ params, searchParams }) {
  //   const router = useRouter();
  //   const pathname = usePathname();
  //   const params = useParams();

  console.log(params, searchParams);

  return (
    <div>
      ini product detail {params?.id} {searchParams?.hello}
    </div>
  );
}
export default Page;

"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Search() {
  const router = useRouter();
  const params = useSearchParams();
  const accessToken = params.get("accessToken");
  const loginId = JSON.stringify(params.get("loginId"));
  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem("accessToken", `Bearer ${accessToken}`);
      localStorage.setItem("loginId", loginId);
    }

    router.push("/survey");
  }, [router, accessToken, loginId]);
  return <div>Loading...</div>;
}

export default function Redirect() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}

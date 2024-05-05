"use client";
import { useSearchParams } from "next/navigation";
import { Axios } from "@/api/axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Redirect() {
  const params = useSearchParams();
  const accessToken = params.get("accessToken");
  const loginId = params.get("loginId");
  const router = useRouter();
  // useEffect(() => {
  //   router.push("/");
  // }, [router]);

  localStorage.setItem("accessToken", JSON.stringify(accessToken));
  localStorage.setItem("loginId", JSON.stringify(loginId));
  return (
    <div>
      1.{accessToken} 2.{loginId}
    </div>
  );
}

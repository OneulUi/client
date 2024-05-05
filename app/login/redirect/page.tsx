"use client";
import { useSearchParams } from "next/navigation";
import { Axios } from "@/api/axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Redirect() {
  const params = useSearchParams();
  const accessToken = JSON.stringify(params.get("accessToken"));
  const loginId = JSON.stringify(params.get("loginId"));
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("loginId", loginId);
    router.push("/");
  }, [router, accessToken, loginId]);

  return <div>Loading...</div>;
}

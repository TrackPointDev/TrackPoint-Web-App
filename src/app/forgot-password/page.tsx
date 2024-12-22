"use client"

import type { NextPage } from "next";
import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ForgotPassword: NextPage = () => {
  const router = useRouter();

  const onIconButtonContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-schemes-background h-[1024px] overflow-hidden flex flex-row items-center justify-start py-[182px] px-[420px] box-border text-left text-5xl text-background-brand-default font-roboto">
      <div className="w-[578px] shadow-[0px_16px_32px_-8px_rgba(12,_12,_13,_0.4)] rounded-11xl bg-background-default-default h-[660px] flex flex-row items-start justify-start flex-wrap content-start py-5 px-[25px] box-border gap-x-[55px] gap-y-3">
        <div
          className="w-11 rounded-scale-06 border-border-default-default border-[1px] border-solid box-border h-11 overflow-hidden shrink-0 flex flex-row items-center justify-center p-space-300 cursor-pointer"
          onClick={onIconButtonContainerClick}
        >
          <Image
            className="w-5 relative h-5 overflow-hidden shrink-0"
            width={20}
            height={20}
            alt=""
            src="/arrow-left.svg"
          />
        </div>
        <Image
          className="w-[331px] relative h-[150px] object-cover"
          width={331}
          height={150}
          alt=""
          src="/TrackPointLogo.jpg"
        />
        <h1 className="m-0 w-[528px] relative text-inherit leading-[140%] font-semibold font-[inherit] text-center inline-block shrink-0">
          Forgot your password?
        </h1>
        <div className="w-[528px] relative leading-[140%] font-light text-gray-200 inline-block shrink-0">
          No problem! Simply input the email associated with your account, and
          we’ll reset your password.
        </div>
        <div className="flex-1 rounded-radius-200 bg-background-default-default flex flex-col items-center justify-center p-space-600 gap-space-600 text-base text-text-default-default font-single-line-body-base">
          <div className="self-stretch flex flex-col items-center justify-center gap-space-200">
            <div className="self-stretch relative leading-[140%]">Email</div>
            <div className="w-60 relative leading-[140%] text-text-default-secondary hidden">
              Description
            </div>
            <input
              className="border-border-default-default border-[1px] border-solid [outline:none] font-single-line-body-base text-base bg-background-default-default self-stretch rounded-radius-200 box-border overflow-hidden flex flex-row items-center justify-start py-space-300 px-space-400 text-text-default-tertiary min-w-[240px]"
              name="Forgot Email Box"
              placeholder="Enter your email"
              type="text"
            />
            <div className="relative leading-[140%] hidden">Error</div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-center gap-space-400">
            <div className="rounded-radius-200 overflow-hidden hidden flex-row items-center justify-center p-space-300 gap-space-200">
              <Image
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                width={16}
                height={16}
                alt=""
                src="/star.svg"
              />
              <div className="relative text-base leading-[100%] font-single-line-body-base text-text-neutral-default text-left">
                Cancel
              </div>
              <Image
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                width={16}
                height={16}
                alt=""
                src="/x.svg"
              />
            </div>
            <div className="flex-1 rounded-radius-200 bg-royalblue overflow-hidden flex flex-row items-center justify-center p-space-300 gap-space-200">
              <Image
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                width={16}
                height={16}
                alt=""
                src="/star2.svg"
              />
              <div className="relative text-base leading-[100%] font-single-line-body-base text-text-brand-on-brand text-left">
                Reset Password
              </div>
              <Image
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                width={16}
                height={16}
                alt=""
                src="/x2.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

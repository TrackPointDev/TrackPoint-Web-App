"use client"

import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignUp: NextPage = () => {
  const router = useRouter();

  const onIconButtonContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-schemes-background h-[1024px] overflow-hidden flex flex-row items-center justify-start py-[95px] px-[420px] box-border text-center text-5xl text-background-brand-default font-roboto">
      <div className="w-[600px] !m-[0] absolute top-[95.5px] left-[420px] shadow-[0px_16px_32px_-8px_rgba(12,_12,_13,_0.4)] rounded-11xl bg-background-default-default overflow-hidden shrink-0 flex flex-row items-start justify-start flex-wrap content-start py-5 px-[25px] box-border gap-x-14 gap-y-[11px] z-[0]">
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
        <div className="w-[540px] relative leading-[140%] font-semibold inline-block h-[34px] shrink-0">
          Sign Up
        </div>
        <div className="w-[550px] h-[528px] flex flex-col items-center justify-center p-2.5 box-border text-left text-base text-text-default-default font-single-line-body-base">
          <div className="self-stretch flex-1 rounded-radius-200 bg-background-default-default flex flex-col items-start justify-start p-space-600 box-border gap-space-600 min-w-[320px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-space-200">
              <div className="self-stretch relative leading-[140%]">
                Username
              </div>
              <div className="w-60 relative leading-[140%] text-text-default-secondary hidden">
                Description
              </div>
              <input
                className="border-border-default-default border-[1px] border-solid [outline:none] font-single-line-body-base text-base bg-background-default-default self-stretch rounded-radius-200 box-border overflow-hidden flex flex-row items-center justify-start py-space-300 px-space-400 text-text-default-tertiary min-w-[240px]"
                placeholder="E.x 'JohnDoe'"
                type="text"
              />
              <div className="relative leading-[140%] hidden">Error</div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-center justify-center gap-space-200">
              <div className="self-stretch relative leading-[140%]">Email</div>
              <div className="w-60 relative leading-[140%] text-text-default-secondary hidden">
                Description
              </div>
              <input
                className="border-border-default-default border-[1px] border-solid [outline:none] font-single-line-body-base text-base bg-background-default-default self-stretch rounded-radius-200 box-border overflow-hidden flex flex-row items-center justify-start py-space-300 px-space-400 text-text-default-tertiary min-w-[240px]"
                placeholder="Enter your email"
                type="text"
              />
              <div className="relative leading-[140%] hidden">Error</div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-center justify-center gap-space-200">
              <div className="self-stretch relative leading-[140%]">
                Password
              </div>
              <div className="w-60 relative leading-[140%] text-text-default-secondary hidden">
                Description
              </div>
              <input
                className="border-border-default-default border-[1px] border-solid [outline:none] font-single-line-body-base text-base bg-background-default-default self-stretch rounded-radius-200 box-border overflow-hidden flex flex-row items-center justify-start py-space-300 px-space-400 text-text-default-tertiary min-w-[240px]"
                placeholder="Enter your password"
                type="text"
              />
              <div className="relative leading-[140%] hidden">Error</div>
            </div>
            <div className="w-[482px] flex-1 hidden flex-col items-center justify-end">
              <div className="self-stretch flex flex-row items-center justify-start gap-space-300">
                <div className="w-4 rounded-radius-100 bg-background-brand-default h-4 overflow-hidden shrink-0 flex flex-row items-center justify-center">
                  <Image
                    className="w-4 relative h-4 overflow-hidden shrink-0"
                    width={16}
                    height={16}
                    alt=""
                    src="/check.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[140%]">Label</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-space-300 text-text-default-secondary">
                <div className="w-4 relative h-4 overflow-hidden shrink-0" />
                <div className="flex-1 relative leading-[140%]">
                  Description
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-end justify-center gap-space-400 text-text-neutral-default">
              <div className="w-28 rounded-radius-200 overflow-hidden hidden flex-row items-center justify-center p-space-300 box-border gap-space-200">
                <Image
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  width={16}
                  height={16}
                  alt=""
                  src="/star.svg"
                />
                <div className="relative leading-[100%]">Button</div>
                <Image
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  width={16}
                  height={16}
                  alt=""
                  src="/x.svg"
                />
              </div>
              <button
                className="cursor-pointer [border:none] p-space-300 bg-royalblue flex-1 rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-space-200"
                id="Regster Btn"
              >
                <Image
                  className="w-4 relative max-w-full overflow-hidden h-4 hidden"
                  width={16}
                  height={16}
                  alt=""
                  src="/star1.svg"
                />
                <div className="flex-1 relative text-base leading-[100%] font-single-line-body-base text-text-brand-on-brand text-center">
                  Register
                </div>
                <Image
                  className="w-4 relative max-w-full overflow-hidden h-4 hidden"
                  width={16}
                  height={16}
                  alt=""
                  src="/x1.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

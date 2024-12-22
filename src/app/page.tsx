"use client"

import type { NextPage } from 'next';
import { useCallback } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import styles from '../styles/login.module.css';
import { useRouter } from "next/navigation";


const StartScreen: NextPage = () => {
  const router = useRouter();

  const onTextLinkClick = useCallback(() => {
    router.push("/forgot-password");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
    <div className="w-full relative bg-schemes-background h-[1024px] flex flex-col items-center justify-center py-10 px-[210px] box-border text-left text-xl text-text-default-tertiary font-single-line-body-base">
      <div className="w-[600px] shadow-[0px_16px_32px_-8px_rgba(12,_12,_13,_0.4)] rounded-[20px] h-[880px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
        <Image
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          width={600}
          height={198}
          alt=""
          src="/TrackPointLogo.jpg"
        />
        <form className="m-0 self-stretch bg-background-default-default h-[464px] flex flex-col items-center justify-start py-5 px-[25px] box-border gap-2.5">
          <h3 className="m-0 relative text-5xl font-semibold font-single-line-body-base text-text-default-default text-left">
            Sign In
          </h3>
          <div className="self-stretch rounded-radius-200 bg-background-default-default h-[322px] flex flex-col items-start justify-start py-space-600 px-0 box-border gap-space-600 min-w-[320px]">
            <div className="self-stretch flex flex-col items-end justify-start gap-space-200">
              <div className="self-stretch relative text-base leading-[140%] font-single-line-body-base text-text-default-default text-left">
                Email
              </div>
              <div className="w-60 relative text-base leading-[140%] font-single-line-body-base text-text-default-secondary text-left hidden">
                Description
              </div>
              <input
                className="border-border-default-default border-[1px] border-solid [outline:none] font-single-line-body-base text-base bg-background-default-default self-stretch rounded-radius-200 box-border overflow-hidden flex flex-row items-center justify-start py-space-300 px-space-400 text-text-default-tertiary min-w-[240px]"
                placeholder="Enter your email"
                type="text"
              />
              <div className="relative text-base leading-[140%] font-single-line-body-base text-text-default-default text-left hidden">
                Error
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-space-200">
              <div className="self-stretch relative text-base leading-[140%] font-single-line-body-base text-text-default-default text-left">
                Password
              </div>
              <div className="w-60 relative text-base leading-[140%] font-single-line-body-base text-text-default-secondary text-left hidden">
                Description
              </div>
              <input
                className="border-border-default-default border-[1px] border-solid [outline:none] font-single-line-body-base text-base bg-background-default-default self-stretch rounded-radius-200 box-border overflow-hidden flex flex-row items-center justify-start py-space-300 px-space-400 text-text-default-tertiary min-w-[240px]"
                name="PswrdBox"
                id="2"
                placeholder="Enter your password"
                type="password"
              />
              <div className="relative text-base leading-[140%] font-single-line-body-base text-text-default-default text-left hidden">
                Error
              </div>
            </div>
            <button type="button" className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-end">
              <div
                className="w-[136px] relative text-base [text-decoration:underline] leading-[140%] font-single-line-body-base text-text-default-default text-left inline-block shrink-0 cursor-pointer"
                onClick={() => router.push("/forgot-password")}
              >
                Forgot password?
              </div>
            </button>
            <div className="self-stretch flex flex-row items-center justify-start gap-space-400">
              <div className="w-28 rounded-radius-200 overflow-hidden hidden flex-row items-center justify-center p-space-300 box-border gap-space-200">
                <Image
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  width={16}
                  height={16}
                  alt=""
                  src="/star.svg"
                />
                <div className="relative text-base leading-[100%] font-single-line-body-base text-text-neutral-default text-left">
                  Button
                </div>
                <Image
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  width={16}
                  height={16}
                  alt=""
                  src="/x.svg"
                />
              </div>
              <button className="cursor-pointer [border:none] p-space-300 bg-royalblue flex-1 rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-space-200">
                <Image
                  className="w-4 relative max-w-full overflow-hidden h-4 hidden"
                  width={16}
                  height={16}
                  alt=""
                  src="/star1.svg"
                />
                <div className="flex-1 relative text-base leading-[100%] font-semibold font-single-line-body-base text-text-brand-on-brand text-center">
                  Sign In
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
          <button className="cursor-pointer [border:none] p-0 bg-background-default-default self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs flex flex-col items-center justify-center">
            <div className="rounded-3xs bg-background-default-default flex flex-row items-start justify-start p-[15px] gap-[15px]">
              <Image
                className="w-6 relative h-6 object-cover"
                width={24}
                height={24}
                alt=""
                src="/google-logo.png"
              />
              <div className="relative text-xl font-medium font-roboto text-gray-200 text-left">
                Continue with Google
              </div>
            </div>
          </button>
        </form>
        <div className="self-stretch bg-background-default-default h-[188px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-2.5 px-[25px] box-border gap-2.5">
          <div className="self-stretch flex flex-col items-start justify-start relative gap-2.5">
            <div className="self-stretch h-px flex flex-col items-start justify-center py-0 px-[5px] box-border z-[0]">
              <div className="self-stretch relative border-m3-sys-light-outline-variant border-t-[1px] border-solid box-border h-px" />
            </div>
            <div className="!m-[0] absolute top-[calc(50%_-_10px)] left-[calc(50%_-_22px)] bg-background-default-default flex flex-col items-center justify-center py-0 px-2.5 z-[1]">
              <b className="w-6 relative leading-[100%] inline-block h-5 shrink-0">
                Or
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start py-[35px] px-0 gap-2.5 text-base text-text-default-default">
            <div className="relative leading-[100%]">
              No account? No Problem!
            </div>
            <button
              type='button'
              className="cursor-pointer [border:none] py-5 px-space-300 bg-royalblue self-stretch rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-space-200"
              onClick={() => router.push("/sign-up")}
            >
              <Image
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                width={16}
                height={16}
                alt=""
                src="/user-plus.svg"
              />
              <div className="relative text-xl leading-[100%] font-semibold font-single-line-body-base text-text-brand-on-brand text-left">
                Sign Up Now!
              </div>
              <Image
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                width={16}
                height={16}
                alt=""
                src="/x2.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;

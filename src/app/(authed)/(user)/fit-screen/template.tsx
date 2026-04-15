"use client";

import FitScreen from "@fit-screen/react";
import Image from "next/image";
import { FC, PropsWithChildren, ReactElement, useEffect, useState } from "react";

import Loading from "@/public/assets/animations/loadings/Loading.svg";
import { Header } from "@/src/components";

type T = Readonly<PropsWithChildren>;

const Template: FC<T> = (props): ReactElement => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 1000);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gray-100 text-blue-300">
        <Image alt="Loading..." height={75} src={Loading} width={75} />
      </div>
    );
  }

  return (
    <FitScreen height={1080} mode="full" width={1920}>
      <div className="flex max-h-full flex-col overflow-hidden">
        <Header />
        {props.children}
      </div>
    </FitScreen>
  );
};

export default Template;

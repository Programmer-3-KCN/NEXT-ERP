"use client";

import { FC, PropsWithChildren, ReactElement, useEffect, useState } from "react";

import { Header } from "@/src/components";

type T = Readonly<PropsWithChildren>;

const Template: FC<T> = (props): ReactElement => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="flex h-screen w-screen items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex max-h-screen min-h-screen max-w-screen flex-col overflow-hidden">
      <Header />
      {props.children}
    </div>
  );
};

export default Template;

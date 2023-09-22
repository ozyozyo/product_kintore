"use client";

import UserProvider from "@/app/providers/user-provider";
import AppbarContainer from "@/app/containers/appbar-container";
import MainContentContainer from "@/app/containers/main-content-container";
import MemeberDetail from "./member-detail";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <UserProvider
      appbarChildren={<AppbarContainer />}
      mainChildren={
        <MainContentContainer>
          <MemeberDetail slug={params.slug} />
        </MainContentContainer>
      }
    />
  );
}
"use client";

import UserProvider from "@/app/providers/user-provider";
import {
  AppbarContainer,
  MainContentContainer,
} from "@/app/components/common/containers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ActivityCreate from "./activity-create";

export default function Page() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <UserProvider
        appbarChildren={<AppbarContainer />}
        mainChildren={
          <MainContentContainer>
            <ActivityCreate />
          </MainContentContainer>
        }
      />
    </LocalizationProvider>
  );
}

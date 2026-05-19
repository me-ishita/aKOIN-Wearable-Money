import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { PersonnelPage } from "./pages/PersonnelPage";
import { BusinessPage } from "./pages/BusinessPage";
import { MembershipPage } from "./pages/MembershipPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "personnel", Component: PersonnelPage },
      { path: "business", Component: BusinessPage },
      { path: "membership", Component: MembershipPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);

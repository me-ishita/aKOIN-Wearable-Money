import { Outlet } from "react-router";
import { ThemeProvider } from "../providers/ThemeProvider";
import { ScrollProgress } from "../components/ScrollProgress";
import { SmoothScroll } from "../components/SmoothScroll";
import { NavigationRouter } from "../components/NavigationRouter";
import { Footer } from "../components/Footer";

export function RootLayout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <SmoothScroll />
        <NavigationRouter />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

import { ReactQueryClient } from "components/ReactQueryClient";
import ThemeRegistry from "components/Theme/ThemeRegistry/ThemeRegistry";

export const metadata = {
  title: "Next App with MUI5",
  description: "next app with mui5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <ReactQueryClient>{children}</ReactQueryClient>
        </ThemeRegistry>
      </body>
    </html>
  );
}

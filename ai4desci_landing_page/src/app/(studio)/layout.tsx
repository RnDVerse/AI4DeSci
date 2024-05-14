export const metadata = {
  title: "AI4DeSci",
  description: "AI4DeSci Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

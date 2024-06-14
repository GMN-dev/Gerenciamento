import "./globals.css";

export const metadata = {
  title: "Gerenciamento de Peças",
  description: "Gerenciamento de Peças",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
  
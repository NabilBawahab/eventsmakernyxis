export default function Layout({ children }) {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="border p-6 shadow-md rounded-2xl">{children}</div>
    </div>
  );
}

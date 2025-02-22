export default function Layout({ children }) {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="border p-6 shadow-md rounded-2xl w-[350px]">
        {children}
      </div>
    </div>
  );
}

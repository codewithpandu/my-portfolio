export default function Navurl({ children, url }) {
  return (
    <a href={url} className="hover:text-blue-200 focus:text-blue-200 text-xl">
      {children}
    </a>
  );
}

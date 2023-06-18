export default function Footer() {
  return (
    <div className="bg-gray-100 py-6 grid mx-auto place-content-center">
      <div className="grid grid-cols-3 gap-4">
        <a
          href="https://github.com"
          target="_blank"
          className="p-2 border-2 border-gray-300"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="p-2 border-2 border-gray-300"
        >
          LinkedIn
        </a>
        <a
          href="mailto:lynht273@gmail.com"
          target="_blank"
          className="p-2 border-2 border-gray-300"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

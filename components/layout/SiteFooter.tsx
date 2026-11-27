export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[#D9D9D9] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm">
        <p>&copy; {new Date().getFullYear()} FlavorCraft Labs</p>
        <p>
          Recipe data from the{" "}
          <a
            href="https://docs.noroff.dev/docs/v2/recipe-book/recipes"
            className="underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
          >
            Noroff Recipe Book API
          </a>
        </p>
      </div>
    </footer>
  );
}

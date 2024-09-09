const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 py-4">
      <small className="opacity-50">
        &copy; {currentYear} PetSoft. All rights reserved.
      </small>
    </footer>
  );
}

/* ============================================================
   projects.js — the ORDER of your project pages, in one place.

   Used by the "Next project" link at the bottom of every
   project page: it finds the page you're on in this list and
   links to the one after it. After the last project it loops
   back to the first.

   To reorder the "next" chain, move the lines.
   To add a project, add a line with its address, title and logo.
   ============================================================ */
export const projectOrder = [
  { href: '/portfolio/echoes-design', title: 'Echoes of Abandonment', logo: '/portfolio/echoes/echoes-logo.svg' },
  { href: '/portfolio/irdeto',        title: 'Irdeto Visual Design',  logo: '/portfolio/irdeto/irdeto-logo.png' },
  { href: '/portfolio/roots',         title: 'Roots Film Festival',   logo: '/portfolio/roots/roots-logo.png' },
  { href: '/portfolio/craftiplays',   title: 'Lands of Magic',        logo: '/portfolio/craftiplays/craftiplays-logo.png' },
  { href: '/portfolio/nl12-vr',       title: 'NL12 VR Production',    logo: '/portfolio/nl12/nl12-logo.jpg', logoCover: true },
];

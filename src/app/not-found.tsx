import { redirect } from 'next/navigation';

export default function NotFound() {
  // Automatically redirect any unidentified/invalid path directly to the homepage
  redirect('/');
}

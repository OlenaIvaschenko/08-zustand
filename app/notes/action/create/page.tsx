import NoteForm from '@/components/NoteForm/NoteForm'
import css from './NotesPage.module.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Notes App",
  description: "Useful App for making notes",
  openGraph: {
    title: `Your Notes`,
    description: `Your App for making notes`,
    url: `https://07-routing-nextjs-lac-mu.vercel.app/`,
    images: [
{
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: `your note picture`,
        },
    ]
  }
};

const CreateNote = () =>{
    return (
        <>
        <main className={css.main}>
  <div className={css.container}>
    <h1 className={css.title}>Create note</h1>
	   <NoteForm/>
  </div>
</main>
</>
)
}

export default CreateNote
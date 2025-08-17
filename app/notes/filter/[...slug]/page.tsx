import { fetchNotes } from "@/lib/api";
import NoteClient from "./Notes.client";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = slug[0];

  const title = `Notes by: ${tag}`;
  const description = `Here are all the notes filtered by "${tag}".`;
  const url = `https://your-domain.com/notes/filter/${tag}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: `https://ac.goit.global/fullstack/react/notehub-og-meta.jpg`,
          width: 1200,
          height: 630,
          alt: `Notes filtered by ${tag}`,
        },
      ],
    },
  };
}

const Notes = async ({ params }: Props) => {
  const { slug } = await params;
  const response = await fetchNotes("", 1, slug[0]);

  // console.log(slug);

  return <NoteClient startData={response} tag={slug[0]} />;
};

export default Notes;

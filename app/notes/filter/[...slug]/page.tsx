import { fetchNotes } from "@/lib/api";
import NoteClient from "./Notes.client";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const Notes = async ({ params }: Props) => {
  const { slug } = await params;
  const response = await fetchNotes("", 1, slug[0]);

  // console.log(slug);

  return <NoteClient startData={response} tag={slug[0]} />;
};

export default Notes;

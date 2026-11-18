import { supabase } from "../lib/supabase";

export async function uploadAudioFile(
  buttonName: string,
  file: File
) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("buttonName", buttonName);

  const { data, error } = await supabase.functions.invoke(
    "audio-manager?action=upload",
    {
      method: "POST",
      body: formData
    }
  );

  if (error) {
    throw error;
  }

  return data;
}

export async function getAudioFile(buttonName: string) {
  const { data, error } = await supabase.functions.invoke(
    `audio-manager?action=download&buttonName=${encodeURIComponent(buttonName)}`,
    {
      method: "GET",
    }
  )

  if (error) {
    throw error;
  }

  return data;
}
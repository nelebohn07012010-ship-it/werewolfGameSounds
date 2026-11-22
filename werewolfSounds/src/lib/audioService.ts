import { supabase } from "../lib/supabase";
import { FunctionsHttpError } from "@supabase/supabase-js";

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
    console.log("Upload-Fehler:", error);

    if (error instanceof FunctionsHttpError) {
      const errorDetails = await error.context.json();
      console.log("Server-Fehler:", errorDetails);
    }

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

export async function startRecording(chunksRef: React.RefObject<BlobPart[]>, recorderRef: React.RefObject<MediaRecorder | null>) {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true
  });

  const recorder = new MediaRecorder(stream);
  recorderRef.current = recorder

  recorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      chunksRef.current?.push(event.data);
    }
  };

  recorder.start();
}

export function stopRecording(chunksRef: React.RefObject<BlobPart[]>, recorderRef: React.RefObject<MediaRecorder | null>) {
  const recorder = recorderRef.current
  if (!recorder) {
    return
  }
  return new Promise<File>((resolve) => {
    recorder.onstop = () => {
      const audioBlob = new Blob(chunksRef.current, {
        type: recorder.mimeType
      });

      const audioFile = new File(
        [audioBlob],
        "aufnahme.webm",
        { type: audioBlob.type }
      );
      resolve(audioFile);
    };
    recorder.stop()
  });

}
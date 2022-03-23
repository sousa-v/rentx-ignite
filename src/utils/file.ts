import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  } catch {
    return;
  }
  console.log(filename);
  await fs.promises.unlink(filename);
};

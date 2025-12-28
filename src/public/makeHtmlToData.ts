import { promises as fs } from "fs";
import myfs from "fs";
import * as path from "path";

export async function readHtmlFilesSimple(
  folder: string,
  encoding: BufferEncoding = "utf-8"
): Promise<string[]> {
  const names = await fs.readdir(folder);
  const htmlNames = names.filter((n) => {
    const ext = path.extname(n).toLowerCase();
    return ext === ".html" || ext === ".htm";
  });

  // 로케일 정렬
  const collator = new Intl.Collator("ko");
  htmlNames.sort(collator.compare);

  const reads = htmlNames.map((name) =>
    fs.readFile(path.join(folder, name), { encoding })
  );
  return Promise.all(reads);
}

async function main() {
  const data1 = await readHtmlFilesSimple("./src/public/htmlData/01");
  const data2 = await readHtmlFilesSimple("./src/public/htmlData/02");
  console.log("data1 수: ", data1.length);
  console.log("data2 수: ", data2.length);
  let htmlData = "export const htmlData = [";
  const data = [...data1, ...data2];
  data.forEach((data) => {
    let result = data.replace(/`/g, "AAAA");
    result = result.replace(/\$\{/g, "BBBB");
    htmlData += "`" + result + "`,";
  });
  htmlData += "]";
  myfs.writeFileSync("./src/public/htmlData.ts", htmlData, "utf8");
}

main();

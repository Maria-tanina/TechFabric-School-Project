export async function isImage(file: File): Promise<string> {
  const blob = file.slice(0, 4);
  const data = await new Response(blob).arrayBuffer();
  const arr = new Uint8Array(data);
  let header = "";
  for (let i = 0; i < arr.length; i++) {
    header += arr[i].toString(16);
  }
  switch (header) {
    case "89504e47":
      return "image/png";
    case "ffd8ffe0":
    case "ffd8ffe1":
    case "ffd8ffe2":
      return "image/jpeg";
    default:
      return "unknown";
  }
}

export const extraerEnlacesImagenes = (html: string): string[] => {
  const regex = /<img[^>]+src="([^">]+)"/g;
  const urls: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(html)) !== null) {
    urls.push(match[1]);
  }

  return urls;
};

export const get_links = async stream_url => {
  const id = stream_url.split('/').pop();
  const XSTREAM_CDN_LINK = `https://embedsito.com/api/source/${id}`;
  const response = await fetch(XSTREAM_CDN_LINK, {method: 'POST'});
  return response.json();
};

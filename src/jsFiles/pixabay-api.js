export function fetchImg(query) {
    const searchParams = new URLSearchParams({
      key: '47243277-022f3b1cb192db5092251a38d',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const url = `https://pixabay.com/api/?${searchParams}`;
  
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
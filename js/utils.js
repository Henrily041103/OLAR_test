export async function fetchJSON(url) {
    var response = await fetch(url, {
        headers: {
          'Accept': 'application/json'
        }
    });
    return response.json();
}

export async function writeToJSON(content, url) {
  var response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(content),
});
}

export function getSiblings (element) {
  var allElements = element.parentElement.children;
  
  var siblings = Array.from(allElements).filter((value, index, arr) => {
    if ((value != element)) return value;
  })
  return siblings;
}

export async function fetchHTML(url) {
  var response = await fetch(url, {
    headers: {
      'Accept': 'text/html'
    }
  });
  response = await response.text();
  return response;
}
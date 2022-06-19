export async function fetchJSON() {
    var response = await fetch("../test_acc/acc.json", {
        headers: {
          'Accept': 'application/json'
        }
    });
    return response.json();
}

export async function writeToJSON(content) {
  var response = await fetch("../test_acc/acc.json", {
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
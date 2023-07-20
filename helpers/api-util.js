export async function getAllEvents() {
  const response = await fetch(
    "https://nextproject-f03d3-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
  );
  const data = await response.json();
  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  const featuredEvents = await allEvents.filter((event) => event.isFeatured);

  console.log(featuredEvents)
  return featuredEvents;
}

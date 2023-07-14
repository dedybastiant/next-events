import EventSearch from "../components/event-search/event-search";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventSearch />
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;

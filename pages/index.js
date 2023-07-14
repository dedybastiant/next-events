import { useRouter } from "next/router";
import EventSearch from "../components/event-search/event-search";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();

  function finEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath)
  }

  return (
    <div>
      <EventSearch onSearch={finEventsHandler}/>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;

import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/event-search/event-search";
import { getAllEvents } from "../../helpers/api-util";
import { Fragment } from "react";

function EventsPage(props) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={props.allEvents} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      allEvents: events,
    },
  };
}

export default EventsPage;

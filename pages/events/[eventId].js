import Head from "next/head";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";

function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (event === undefined) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  if (event === null) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta
          name="description"
          content={event.description}
        ></meta>
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        alt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  if (!event) {
    return {
      props: {
        selectedEvent: null,
      },
    };
  }

  return {
    props: {
      selectedEvent: event,
      revalidate: 30,
    },
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const ids = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: ids,
    fallback: "blocking",
  };
}

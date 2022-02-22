import { useHistory } from "react-router-dom";
import NewMetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-course-2-f15c5-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;

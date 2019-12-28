export default class Event {

  constructor(eventInfo = {}) {
    this.eventInfo = eventInfo;
  }

  testEvent() {
    return new Event({
      uuid: "123",
      Title: "Test Event",
      Location: "Online",
      "Check-in time": 3600,
      Description: "This is a made up event used to test the functionality of the web version.",
      "Organization title": "Eventure Development",
      Organization: "eventure",
      Published: 1,
      Tags: ["Tech"],
    })
  }

}

const signs =  [
  {
    follow: false,
    title: "Capricorn",
    bannerURL: "/img/abstract-q-c-400-200-1.jpg",
    portrait: "/img/capricorn.png",
    region: "New York City, NY",
    email: "",
    zodiacDate: "December 21-January 20",
    caption: "Serious, independent, disciplined and tenacious",
    tags: ["DREAM", "CREATE", "INSPIRE", "INOVATE"],
    message: "Nunc lobortis mattis aliquam faucibus purus in massa. Cras sed felis eget velit aliquet sagittis id consectetur purus."
  }
  ,
  {
    follow: false,
    title: "Aquarius",
    bannerURL: "/img/abstract-q-c-400-200-1.jpg",
    portrait: "/img/aquarius.png",
    region: "New York City, NY",
    email: "",
    zodiacDate: "January 21-February 18",
    caption: "Deep, imaginative, original and uncompromising",
    tags: ["DREAM", "CREATE", "INSPIRE", "INOVATE"],
    message: "Amet commodo nulla facilisi nullam vehicula ipsum. Turpis tincidunt id aliquet risus feugiat in ante metus. Dictum at tempor commodo ullamcorper a lacus."
  }
  ,
  {
    follow: false,
    title: "Pisces",
    bannerURL: "/img/abstract-q-c-400-200-1.jpg",
    portrait: "/img/pisces.png",
    region: "New York City, NY",
    email: "johnsmith@twitch.com",
    zodiacDate: "February 19-March 20",
    caption: "Affectionate, empathetic, wise and artistic",
    tags: ["DREAM", "CREATE", "INSPIRE", "INOVATE"],
    message: "Habitant morbi tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio."
  }
  ,
  {
    follow: false,
    title: "Aries",
    bannerURL: "/img/abstract-q-c-400-200-1.jpg",
    portrait: "/img/aries.png",
    region: "New York City, NY",
    email: "",
    zodiacDate: "March 21-April 19",
    caption: "Eager, dynamic, quick and competitive",
    tags: ["DREAM", "CREATE", "INSPIRE", "INOVATE"],
    message: "Mattis vulputate enim nulla aliquet. Et odio pellentesque diam volutpat commodo sed egestas."
  }
  ,
  {
    follow: true,
    title: "Taurus",
    bannerURL: "/img/abstract-q-c-400-200-1.jpg",
    portrait: "/img/taurus.png",
    region: "New York City, NY",
    email: "",
    zodiacDate: "April 20-May 20",
    caption: "Strong, dependable, sensual and creative",
    tags: ["DREAM", "CREATE", "INSPIRE", "INOVATE"],
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
  ,
  {
    follow: false,
    title: "Gemini",
    bannerURL: "/img/abstract-q-c-400-200-1.jpg",
    portrait: "/img/gemini.png",
    region: "New York City, NY",
    email: "",
    zodiacDate: "May 21-June 20",
    caption: "Versatile, expressive, curious and kind",
    tags: ["DREAM", "CREATE", "INSPIRE", "INOVATE"],
    message: "Nunc lobortis mattis aliquam faucibus purus in massa. Cras sed felis eget velit aliquet sagittis id consectetur purus."
  }
  ,
  {
    follow: false,
    title: "Cancer",
    bannerURL: "/img/abstract-q-c-400-200-1.jpg",
    portrait: "/img/cancer.png",
    region: "New York City, NY",
    email: "",
    zodiacDate: "June 21-July 22",
    caption: "Intuitive, sentimental, compassionate and protective",
    tags: ["DREAM", "CREATE", "INSPIRE", "INOVATE"],
    message: "Mattis vulputate enim nulla aliquet. Et odio pellentesque diam volutpat commodo sed egestas."
  }
  ,
  {
    follow: false,
    title: "Leo",
    bannerURL: "/img/abstract-q-c-400-200-1.jpg",
    portrait: "/img/leo.png",
    region: "New York City, NY",
    email: "",
    zodiacDate: "July 23-August 22",
    caption: "Dramatic, outgoing, fiery and self-assured",
    tags: ["DREAM", "CREATE", "INSPIRE", "INOVATE"],
    message: "Amet commodo nulla facilisi nullam vehicula ipsum. Turpis tincidunt id aliquet risus feugiat in ante metus. Dictum at tempor commodo ullamcorper a lacus."
  }
  ,
  {
    follow: false,
    title: "Scorpio",
    bannerURL: "/img/abstract-q-c-400-200-1.jpg",
    portrait: "/img/scorpio.png",
    region: "New York City, NY",
    email: "johnsmith@twitch.com",
    zodiacDate: "October 23-November 21",
    caption: "Practical, loyal, gentle and analytical",
    tags: ["DREAM", "CREATE", "INSPIRE", "INOVATE"],
    message: "Habitant morbi tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio."
  }
  ,
    {
    follow: false,
    title: "Virgo",
    bannerURL: "/img/abstract-q-c-400-200-1.jpg",
    portrait: "/img/virgo.png",
    region: "New York City, NY",
    email: "",
    zodiacDate: "August 23-September 22",
    caption: "Social, fair-minded, diplomatic and gracious",
    tags: ["DREAM", "CREATE", "INSPIRE", "INOVATE"],
    message: "Mattis vulputate enim nulla aliquet. Et odio pellentesque diam volutpat commodo sed egestas."
  }
  ,
  {
    follow: true,
    title: "Libra",
    bannerURL: "/img/abstract-q-c-400-200-1.jpg",
    portrait: "/img/libra.png",
    region: "New York City, NY",
    email: "",
    zodiacDate: "September 23-October 22",
    caption: "Passionate, stubborn, resourceful and brave",
    tags: ["DREAM", "CREATE", "INSPIRE", "INOVATE"],
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
  ,
  {
    follow: true,
    title: "Sagittarius",
    bannerURL: "/img/abstract-q-c-400-200-1.jpg",
    portrait: "/img/sagittarius.png",
    region: "New York City, NY",
    email: "",
    zodiacDate: "November 22-December 21",
    caption: "Extroverted, optimistic, funny and generous",
    tags: ["DREAM", "CREATE", "INSPIRE", "INOVATE"],
    message: "Nunc lobortis mattis aliquam faucibus purus in massa. Cras sed felis eget velit aliquet sagittis id consectetur purus. "
  }
];

export default signs;
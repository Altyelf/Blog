
export type Posts = {
    id: number;
    title: string;
    image: string[];
  };

export const postsList: Posts[] = [
    {
      id: 1,
      title: 'What game should you play next?',
      image: ['https://pusheen.com/wp-content/uploads/2020/09/Preview-Image.jpg']
    },
    {
      id: 2,
      title: 'How well do you know Pusheen?',
      image: ['https://pusheen.com/wp-content/uploads/2020/04/How-well-do-you-know-Pusheen-and-co-12.jpg']
    },
    {
      id: 3,
      title: 'What kinf of coffee drinker are you?',
      image: ['https://pusheen.com/wp-content/uploads/2019/12/Catfe-Drink_v2-34.jpg']
    },
  ];
  
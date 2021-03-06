import { StateProps } from './commentReducer';

export const initialState: StateProps = {
  loggedUser: {
    image: 'image-juliusomo.png',
    username: 'juliusomo',
  },

  isDeletingComment: false,
  deletingCommentID: '',
  isLoading: true,

  comments: [
    {
      id: '3c91db81-0d9b-4ee5-ba78-397c7da5d15f',
      type: 'comment',
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: 1654905600000,
      score: 12,
      replyingTo: null,
      user: {
        image: 'image-amyrobson.png',
        username: 'amyrobson',
      },
    },

    {
      id: '049ec969-6d31-4463-84f4-1d7a62701b07',
      type: 'comment',
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: 1657238400000,
      score: 5,
      replyingTo: null,
      user: {
        image: 'image-maxblagun.png',
        username: 'maxblagun',
      },
    },

    {
      id: '79838784-5b91-4173-a3d4-f289abaf35d6',
      type: 'reply',
      content:
        "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
      createdAt: 1657670400000,
      score: 4,
      replyingTo: 'maxblagun',
      user: {
        image: 'image-ramsesmiron.png',
        username: 'ramsesmiron',
      },
    },

    {
      id: '7d4a783e-20b1-4a0a-a5bc-cabd1b202b88',
      type: 'reply',
      content:
        "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
      createdAt: 1658361600000,
      score: 2,
      replyingTo: 'ramsesmiron',
      user: {
        image: 'image-juliusomo.png',
        username: 'juliusomo',
      },
    },
  ],
};

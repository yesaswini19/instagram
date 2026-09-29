export const users = [
  {
    id: 1,
    username: 'mila.rose',
    fullName: 'Mila Rose',
    email: 'mila@example.com',
    bio: 'Photographer • Traveler • Coffee lover',
    profilePicture:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    followers: 18200,
    following: 420,
    posts: 84,
  },
  {
    id: 2,
    username: 'jason.miles',
    fullName: 'Jason Miles',
    email: 'jason@example.com',
    bio: 'Creative director and weekend explorer.',
    profilePicture:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    followers: 15400,
    following: 520,
    posts: 71,
  },
  {
    id: 3,
    username: 'ava.nova',
    fullName: 'Ava Nova',
    email: 'ava@example.com',
    bio: 'Designing a beautiful life one frame at a time.',
    profilePicture:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80',
    followers: 21200,
    following: 390,
    posts: 90,
  },
  {
    id: 4,
    username: 'leo.carter',
    fullName: 'Leo Carter',
    email: 'leo@example.com',
    bio: 'Storyteller • Filmmaker',
    profilePicture:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    followers: 12650,
    following: 601,
    posts: 63,
  },
  {
    id: 5,
    username: 'zoe.hill',
    fullName: 'Zoe Hill',
    email: 'zoe@example.com',
    bio: 'Bringing light to every room I enter.',
    profilePicture:
      'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=300&q=80',
    followers: 33000,
    following: 821,
    posts: 118,
  },
];

export const currentUser = users[0];

export const stories = [
  { id: 1, user: users[0], image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80', viewed: false },
  { id: 2, user: users[1], image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80', viewed: true },
  { id: 3, user: users[2], image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80', viewed: false },
  { id: 4, user: users[3], image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80', viewed: false },
  { id: 5, user: users[4], image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80', viewed: true },
];

export const posts = [
  {
    id: 1,
    user: users[1],
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    caption: 'Golden hour with the crew. #sunset #friends #weekend',
    likes: 1284,
    comments: [
      { id: 1, user: users[0], text: 'This is stunning!' },
      { id: 2, user: users[2], text: 'Perfect vibes.' },
    ],
    liked: true,
    saved: false,
    location: 'Malibu, California',
  },
  {
    id: 2,
    user: users[2],
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    caption: 'Fresh ideas and a fresh start. #design #branding',
    likes: 2430,
    comments: [
      { id: 1, user: users[3], text: 'Obsessed with this aesthetic.' },
    ],
    liked: false,
    saved: true,
    location: 'Nashville',
  },
  {
    id: 3,
    user: users[0],
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
    caption: 'A little piece of the mountains today. #hiking #nature',
    likes: 4510,
    comments: [
      { id: 1, user: users[4], text: 'This is calm energy.' },
      { id: 2, user: users[1], text: 'Love this.' },
    ],
    liked: false,
    saved: false,
    location: 'Aspen',
  },
];

export const suggestedUsers = users.slice(1, 4);

export const notifications = [
  { id: 1, type: 'like', user: users[1], text: 'John liked your post.', read: false },
  { id: 2, type: 'comment', user: users[2], text: 'Sarah commented on your post.', read: false },
  { id: 3, type: 'follow', user: users[3], text: 'Leo started following you.', read: true },
  { id: 4, type: 'mention', user: users[4], text: 'Zoe mentioned you in a story.', read: true },
];

export const conversations = [
  { id: 1, user: users[1], preview: 'Are we still meeting tomorrow?', online: true, time: '2m ago' },
  { id: 2, user: users[2], preview: 'Loved your last post!', online: false, time: '12m ago' },
  { id: 3, user: users[3], preview: 'Can you send the final draft?', online: true, time: '1h ago' },
  { id: 4, user: users[4], preview: 'Lets catch up this weekend.', online: false, time: 'Today' },
];

export const messages = [
  { id: 1, from: 'them', text: 'Hey! Are you free later?', time: '9:14 AM' },
  { id: 2, from: 'me', text: 'Yep, I am. Want to meet around 6?', time: '9:15 AM' },
  { id: 3, from: 'them', text: 'Perfect, see you then!', time: '9:16 AM' },
];

export const exploreGrid = [
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=700&q=80',
];

export const reels = [
  { id: 1, user: users[1], title: 'City walk in motion', caption: 'Sunset stroll and soft music.', image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80', likes: 2814 },
  { id: 2, user: users[3], title: 'Photo dump', caption: 'Weekend mode on.', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80', likes: 1962 },
  { id: 3, user: users[4], title: 'Morning espresso', caption: 'Little rituals matter.', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80', likes: 3458 },
];

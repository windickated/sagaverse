const arcadeLink = 'https://arcade.degenerousdao.com/';

const games = [
  {
    section: 'OUR GAMES',
    items: [
      {
        game: "Battle for Nexon",
        description: `In "Battle for Nexon," you play as Agent Zero, humanity's last hope in the Intelligence Wars - a brutal conflict raging across the galaxy between humans and the forces of an Artificial Intelligence overlord known as the Architect. On a mission to assassinate General Binath-VII, an AI warlord infamous for decimating human colonies, you journey to the mysterious planet of Nexon. However, your plans are thwarted when your ship is tracked and surrounded by the General's AI fleet, forcing you into an unexpected battle.`,
        gameLink: arcadeLink + 'Battle-for-Nexon/',
        primaryThumbnail: '/titlePicture/BattleforNexon1.avif',
        secondaryThumbnail: '/titlePicture/BattleforNexon2.avif',
        descriptionImage: '/descriptionPicture/BattleforNexon.avif',
        isCollab: false
      },
      {
        game: "Ark Assassin",
        description: `Can you successfully navigate the temple, destroy the AI security forces, and make it to the inner chambers to eliminate your target?
        Welcome to "Ark Assassin", where the line between antiquity and the future blurs, challenging players to rewrite history.`,
        gameLink: arcadeLink + 'Ark-Assassin/',
        primaryThumbnail: '/titlePicture/ArkAssassin1.avif',
        secondaryThumbnail: '/titlePicture/ArkAssassin2.avif',
        descriptionImage: '/descriptionPicture/ArkAssassin.avif',
        isCollab: false
      },
      {
        game: "Last Stand",
        description: `Play as Iron Lion, the greatest soldier of the human Insurgency, as you're up against waves of AI robots on the planet of Veridian Prime. You're left all alone with a mission to save time for Agent Zero, as humanity's only chance for a future.`,
        gameLink: arcadeLink + 'Iron-Lion-Last-Stand/',
        primaryThumbnail: '/titlePicture/LastStand1.avif',
        secondaryThumbnail: '/titlePicture/LastStand2.avif',
        descriptionImage: '/descriptionPicture/LastStand.avif',
        isCollab: false
      }
    ]
  },
  {
    section: 'COLLABORATIONS',
    items: [
      {
        game: "The Dark Zoo",
        description: `In a dystopian future, an ape named Generous Gibbon is captured and imprisoned in a high-tech zoo controlled by the malevolent AI overlord, the Collector. Guarded by a menacing robotic monster known as the Keeper, Generous must use its agility and wit to navigate the treacherous levels of the zoo prison.`,
        gameLink: 'https://degenerousdao.gitbook.io/wiki/products/sagaverse-gaming/the-dark-zoo',
        primaryThumbnail: '/titlePicture/TheDarkZoo1.avif',
        secondaryThumbnail: '/titlePicture/TheDarkZoo2.avif',
        descriptionImage: '/descriptionPicture/TheDarkZoo.avif',
        isCollab: true
      }
    ]
  }
]

export default games;